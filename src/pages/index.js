import styles from './index.css';
import { Menu, Carousel } from 'antd';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import logo from '../assets/logo.png';

import img11 from '../assets/11.png';
import img22 from '../assets/22.png';
import img33 from '../assets/33.png';
import img44 from '../assets/44.png';
import img55 from '../assets/55.png';
import img66 from '../assets/66.png';

import wechat from '../assets/wechat.png'

function handleClick(e) {
 console.dir(e)
 window.location.hash = e.key;
}

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <div className={styles.logowrapper}>
          <img className={styles.logo} src={logo} />
        </div>
        <Menu
          onClick={handleClick}
          selectedKeys={['index']}
          mode="horizontal"
          className={styles.container}
        >
          <Menu.Item key="index">
            首页
          </Menu.Item>
          <Menu.Item key="fix">
            解决方案
          </Menu.Item>
          <Menu.Item key="ad">
            广告赞助
          </Menu.Item>
           <Menu.Item key="com">
            商务合作
          </Menu.Item>
           <Menu.Item key="us">
            关于我们
          </Menu.Item>
        </Menu>
      </div>
     
      <div className={ styles.box } id ="index">
        <Carousel autoplay>
        <div><img src= {img1}/></div>
        <div><img src= {img2}/></div>
        <div><img src= {img3}/></div>
        </Carousel>
      </div>
      <div className={ styles.box } id ="fix">
          <h3>技术触手可得，像搭积木一样提供软件技术服务</h3>
          <ul className={ styles.subbox }>
            <li>
              <div>
                  <div className = { styles.imgwrapper }> <img src = { img11 }/> </div>
                  <div className= { styles.inner }>
                    <h4>社交电商</h4>
                    <p>宇宙没有中心，每个人都能成为中心</p>
                  </div>
              </div>
            </li>
            <li>
              <div>
                  <div className = { styles.imgwrapper }> <img src = { img22 }/> </div>
                  <div className= { styles.inner }>
                   <h4>技术咨询</h4>
                   <p>精湛的技术，贴近客户，持续进行服务创新</p>
                  </div>
              </div>
            </li>
            <li>
              <div>
                  <div className = { styles.imgwrapper }> <img src = { img66 }/> </div>
                  <div className= { styles.inner }>
                    <h4>平台开发</h4>
                    <p>轻量级业务搭建，可视化工具，云端管理</p>
                  </div>
              </div>
            </li>
            <li>
              <div>
                  <div className = { styles.imgwrapper }> <img src = { img33 }/> </div>
                  <div className= { styles.inner }>
                    <h4>广告服务</h4>
                    <p>原生广告，微信公众号广告，品牌合作推广</p>
                  </div>
              </div>
            </li>
            <li>
              <div>
                  <div className = { styles.imgwrapper }> <img src = { img44 }/> </div>
                  <div className= { styles.inner }>
                   <h4>H5开发</h4>
                   <p>量身为中小企业定制裂变影响服务业务</p>
                  </div>
              </div>
            </li>
            <li>
              <div>
                  <div className = { styles.imgwrapper }> <img src = { img55 }/> </div>
                  <div className= { styles.inner }>
                    <h4>小程序开发</h4>
                    <p>打造智能服务体系，推进业务，让商业更简单</p>
                  </div>
              </div>
            </li>
          </ul>
      </div>
      <div className={ styles.box } id ="ad" style={{ background: 'rgb(238, 253, 255)' }}>
        <h3 style={{ marginBottom: '30px'}}>『 易触即达网络科技有限公司 』银行对公账号</h3>
        <div className={styles.container}>
          <div className={styles.info}>
          <div className={ styles.subinfo }>
            <div>
              <label>企业名称：</label>
              <p>盂县易触即达网络科技有限公司</p>
            </div>
            <div>
              <label>对公账户：</label>
              <p>阳泉市商业银行股份有限公司盂县支行</p>
            </div>
            <div>
              <label>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</label>
              <p>501000000121829</p>
            </div>
            
            
          </div>
          <div className={ styles.subinfo }>
            <div>
              <label>个人支付宝账号：</label>
              <p>chenwei10001@163.com</p>
            </div>
            <div>
              <label>企业支付宝账号：</label>
              <p>604846283@qq.com</p>
            </div>
            <div>
              <label>姓名：</label>
              <p>韩振东</p>
            </div>
          </div>
          <div className={ styles.subinfo } style={{ width: '200px'}}>
            <img  src ={ wechat } style={{ height: '70px', marginBottom:'10px' }}/>
            <p style={{ fontSize: '12px'}}>注：开纸质发票金额需达到200元，低于200元只提供电子凭证。</p>
          </div>
        </div>
      </div>
      </div>
      <div className={ styles.box } id ="com">
         <img src= {img4} style={{ width: '100%' }}/>
      </div>
      <div className={ styles.box } id ="us">
        <h3 style={{ marginBottom: '30px'}}>关于我们</h3>
        <div className={ styles.container } style={{ display: 'block', 'textIndent':'2em', 'textAlign': 'left' }}> 
            <p>易触即达网络科技有限公司成立于2018年，以软件服务为核心，专注解决商家移动端线上宣传推广，拓展社交电商渠道而推出的营销服务平台。以技术创新为基础，为商家宣传、用户产品销售、信息发布创造更有效的价值而不断努力。</p>
            <p>我们坚守网络诚信及为用户创造最大利益的核心价值观，全力打造一个简单易用，有效的即时的网络商务交易平台而砥砺前行。</p>
        </div>
      </div>
      <div className={ styles.footer }>
        盂县易触即达网络科技有限责任公司版权所有 晋ICP证19003032
      </div>
    </div>
  );
}


