import React from 'react';

export default class Nav extends React.Component{
    render(){
        return(
            <nav>
          <div
            style={{
              padding: 10,
              fontSize:24
            }}
          >
            <div
              style={{
                color: "aliceblue",
              }}
            >
              <span className="title_logo">T</span>東京
            </div>
            <div
              style={{
                color: "aliceblue",
              }}
            >
              <span className="title_logo"
              >S</span>世田谷
            </div>
            <div
              style={{
                color: "aliceblue"
              }}
            >
              <span className="title_logo">C</span>キャッパーズ
            </div>
            
            <div
              style={{
                fontSize: 30
              }}
            ></div>
          </div>
        </nav>
        )
    }
}