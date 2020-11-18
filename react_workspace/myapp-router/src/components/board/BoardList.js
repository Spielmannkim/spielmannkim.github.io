import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';
//백엔드 서버와 데이터를 주고 받는 라이브러리

class BoardList extends Component{
    //생성자 - 부모로부터 받을때는 props속성
    //자기 데이터는 state속성에 저장하기로
    constructor(props){
        super(props);
        this.state={ boardList:[] }
    }

    componentDidMount(){
        //여기서 서버랑 통신해서 this.setState함수 호출
        var url="http://localhost:9000/guestbook";
        axios.get(url)
        .then( (response)=>{
            console.log(response.data["data"]);
            this.setState({boardList:response.data["data"]});
        });
    }

    tabRow(){
        //자바스크립트 배열에 map 함수 추가
        //이함수는 배열의 요소 하나하나마다, 요소개수만큼
        //호출된다.
        return this.state.boardList.map( (object, i)=>{
            //첫번재인자 - 각 요소, 두번째인자 -위치값
            return(
                <tr>
                    <td>{object.id}</td>
                    <td>{object.title}</td>
                    <td>{object.writer}</td>
                    <td>
                    <a href={"/board/edit/"+object.id}
                    className="btn btn-primary">수정</a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="#"
                        className="btn btn-danger">삭제</a>
                    </td>
                </tr>
            )
        })
    }
    render(){
        return(
            <div class="container" style={{"marginTop":"20px"}}>
                <h3>게시판</h3>
                <table class="table">
                    <thead class="thead-light">
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>writer</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>

                <a href="/board/write"
                    className="btn btn-primary">글쓰기</a>
            </div>
        )
    }
}

export default BoardList;