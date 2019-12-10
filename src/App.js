import React from "react";
import logo from "./logo.svg";
import Nav from './Nav'
import "./App.css";
import { Tab , Tabs } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <img src={'./ECc6dwJUIAAOE6D.jpg'} id="main_image" />
        <Tabs>
          <Tab title="活動場所・予定" eventKey={2}>

          </Tab>
          <Tab title="大会戦績" eventKey={0}>
            8/17,18 佐倉大会 予選Aリーグ 3位(1勝2敗)
            決勝トーナメント 1回戦敗退

          </Tab>
          
          
          <Tab title="部員紹介" eventKey={1}>
            <div
              style={{
                border:'1px solid #444444',
                width:'20vw'
              }}
            >
              <img src={'./jpg'} height={200}/>
              かわしま
            </div>

            
            ちはや
            kami
            あいえす
            響夜
          </Tab>
          <Tab title="お問い合わせ" eventKey={3}>

          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
