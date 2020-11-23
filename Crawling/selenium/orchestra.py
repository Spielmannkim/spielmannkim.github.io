#터미널에서 할일
#cd C:\Users\User\Desktop\crawling\selenium\Scripts
#activate
#cd C:\Users\User\Desktop\crawling\selenium
#python orchestra.py

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()

#서울시향
driver.get("https://www.seoulphil.or.kr/recruit/orchestra/list?langCd=ko&menuFlag=MFLG0001")
driver.find_element_by_xpath("/html/body/div[2]/section/article/div[2]/table/tbody/tr[1]/td[1]/a").click()
driver.find_element_by_xpath("/html/body/div[2]/section/article/div/div[2]/ul[2]/li/a").click()