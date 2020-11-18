import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class BoardWrite extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            writer:"",
            contents:""
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    //함수가 버튼 누를때 호출 - 매개변수로 이벤트가 발생한 객체
    onSubmit(e){
        // <button>보내기</button>
        // <input type="submit" value="보내기">

        e.preventDefault(); //무조건 서버로 전송을 막는다
        //<button type="button">보내기</button>
        let url="http://localhost:9000/guestbook/insert";
        axios.post(url, this.state)
        .then( (res)=>{
            alert("등록되었습니다.");
            this.props.history.push("/board");
        });
    }

    render(){
        return (
            <div className="container">
                <h1>글쓰기</h1>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>title : </label>
                    <input type="text" className="form-control"
                    onChange={ (e)=>this.setState({"title":e.target.value})}/>
                </div>
                <div className="form-group">
                    <label>writer : </label>
                    <input type="text" className="form-control"
                    onChange={ (e)=>this.setState({"writer":e.target.value})}/>
                </div>
                <div className="form-group">
                    <label>contents : </label>
                    <input type="text" className="form-control"
                    onChange={ (e)=>this.setState({"contents":e.target.value})}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">등록</button>
                </div>
                </form>
            </div>
        )
    }
}

export default BoardWrite;