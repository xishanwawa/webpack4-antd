/**
 * Created by ***
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Button, Input, Row, Col, Switch, Modal } from "antd";

const { TextArea } = Input;

import moment from "moment";

// function getWeeksStr(dateStr) {
//   // let date = dateStr || moment().format("YYYY-MM-DD");

//   let arr = [];
//   //获取iso时间标准的日期，周的第一天是周一， 1-7，普遍的事0-6
//   let item = moment().startOf("isoWeek");
//   arr.push(item.format("YYYY-MM-DD"));

//   for (let i = 1; i < 7; i++) {
//     let str = item.add(1, "d").format("YYYY-MM-DD");
//     arr.push(str);
//   }
//   debugger;
//   return arr;
// }

import request from "reqwest";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// import E from "wangeditor";

// import LzEditor from "react-lz-editor";

import Editor from "react-umeditor";

// import {
//   convertFromRaw,
//   convertToRaw,
//   CompositeDecorator,
//   DefaultDraftBlockRenderMap,
//   ContentState,
//   Editor,
//   EditorState,
//   Entity,
//   RichUtils,
//   getDefaultKeyBinding,
//   KeyBindingUtil,
//   Modifier
// } from "draft-js";

//导入UI组件
// class Index1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newIndex: 0,
//       data: [
//         {
//           name: "名称1"
//         },
//         {
//           name: "名称2"
//         },
//         {
//           name: "名称3"
//         }
//       ]
//     };
//   }

//   renderData = () => {
//     let data = this.state.data;

//     data = data.map((item, index) => {
//       item.serverIndex = index;
//       return item;
//     });

//     data = data.filter((item, index) => {
//       return item.isDelete != 1;
//     });
//     return data;
//   };

//   submitData = () => {
//     let data = this.state.data;
//     data = data.filter((item, index) => {
//       return item.isDelete || item.isLocalAdd || item.isUpdate;
//     });
//     console.log(data);
//   };

//   addData = () => {
//     let data = this.state.data;
//     let newIndex = this.state.newIndex;
//     newIndex++;
//     data.push({
//       name: "新名称" + newIndex,
//       isLocalAdd: 1
//     });
//     this.setState({ data, newIndex });
//   };

//   deleteData = serverIndex => {
//     let data = this.state.data;
//     if (data[serverIndex]["isLocalAdd"]) {
//       data.splice(serverIndex, 1);
//     } else {
//       data[serverIndex]["isDelete"] = 1;
//     }
//     this.setState(data);
//   };

//   updateData = serverIndex => {
//     let data = this.state.data;
//     data[serverIndex].checked = !data[serverIndex].checked;
//     data[serverIndex].isUpdate = 1;
//     this.setState(data);
//   };

//   getClickData = () => {
//     request({
//       url: "/api/index",
//       method: "get",
//       error: function(err) {},
//       success: function(resp) {
//         debugger;
//       }
//     });
//   };

//   render() {
//     // this.getData();
//     let dom = this.renderData().map((item, index) => {
//       return (
//         <Row key={index}>
//           <Col span={2}>{item.name}</Col>
//           <Col span={2}>
//             <Switch
//               checked={item.checked}
//               onChange={() => {
//                 this.updateData(item.serverIndex);
//               }}
//             />
//           </Col>
//           <Col span={6}>
//             <Button
//               onClick={() => {
//                 this.deleteData(item.serverIndex);
//               }}>
//               删除
//             </Button>
//           </Col>
//         </Row>
//       );
//     });

//     return (
//       <div>
//         <div style={{ padding: 20 }}>{dom}</div>
//         <Button onClick={this.addData}>新增</Button>{" "}
//         <Button type="primary" onClick={this.submitData}>
//           提交
//         </Button>
//       </div>
//     );
//   }
// }

// class Index2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "" }; // You can also pass a Quill Delta here
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(value) {
//     this.setState({ text: value });
//   }

//   render() {
//     const toolbarOptions = [
//       ["bold", "italic", "underline", "strike"], // toggled buttons
//       ["blockquote", "code-block"],
//       [{ header: 1 }, { header: 2 }], // custom button values
//       [{ list: "ordered" }, { list: "bullet" }],
//       [{ script: "sub" }, { script: "super" }], // superscript/subscript
//       [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//       //[{ direction: "rtl" }], // text direction
//       [{ size: ["small", false, "large", "huge"] }], // custom dropdown
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//       [{ font: [] }],
//       [{ align: [] }],
//       ["link", "image", "video"],
//       ["clean"] // remove formatting button
//     ];

//     return (
//       <div style={{ paddingLeft: 200 }}>
//         <div>
//           <ReactQuill
//             style={{ backgroundColor: "#ffffff", width: 800, height: 200 }}
//             modules={{ toolbar: toolbarOptions }}
//             placeholder={"大侠，讲两句吧！"}
//             value={this.state.text}
//             onChange={this.handleChange}
//           />

//           <Button>保存</Button>
//         </div>

//         <div style={{ marginTop: 100 }}>html预览</div>
//         <TextArea value={this.state.text} style={{ backgroundColor: "#ffffff", width: 800, height: 200 }} />
//       </div>
//     );
//   }
// }

// class Index3 extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       editorContent: "",
//       areaContent: ""
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>wangeditor</h2>
//         </div>

//         {/* 将生成编辑器 */}
//         <div ref="editorElem" style={{ textAlign: "left", backgroundColor: "#FFF" }} />

//         <button onClick={this.clickHandle1.bind(this)}>获取内容</button>
//         <button onClick={this.clickHandle2.bind(this)}>设置内容</button>
//         <TextArea
//           onChange={this.onChangeEditorContent}
//           value={this.state.areaContent}
//           style={{ height: 300, width: 600 }}
//         />
//       </div>
//     );
//   }

//   onChangeEditorContent = e => {
//     this.setState({ areaContent: e.target.value }, () => {
//       // this.editor.txt.html(this.state.editorContent);
//     });
//   };

//   clickHandle1() {
//     this.setState({ areaContent: this.state.editorContent }, () => {});
//   }

//   clickHandle2() {
//     this.editor.txt.html(this.state.areaContent);
//     this.setState({ editorContent: this.state.areaContent }, () => {});
//   }

//   componentDidMount() {
//     const elem = this.refs.editorElem;
//     const editor = new E(elem);
//     this.editor = editor;
//     //配个表情
//     editor.customConfig.emotions = [
//       {
//         // tab 的标题
//         title: "默认",
//         // type -> 'emoji' / 'image'
//         type: "image",
//         // content -> 数组

//         content: [
//           {
//             alt: "[坏笑]",
//             src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png"
//           },
//           {
//             alt: "[舔屏]",
//             src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png"
//           }
//         ]
//       },
//       {
//         // tab 的标题
//         title: "emoji",
//         // type -> 'emoji' / 'image'
//         type: "emoji",
//         // content -> 数组
//         content: ["😀", "😩", "😲", "😁", "😆"]
//       }
//     ];

//     //base64图片上传
//     editor.customConfig.uploadImgShowBase64 = true;

//     //自定义回调
//     // editor.customConfig.customUploadImg = function(files, insert) {
//     //   console.log(files);
//     //   insert("https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png");
//     // };
//     // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
//     editor.customConfig.onchange = html => {
//       this.setState({
//         editorContent: html
//       });
//     };
//     editor.create();
//   }
// }

// class Index4 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: `<h1>一级标题 Head level 1</h1>
//               <p style='text-align:center;'><span style="color:#ED5565">红色文字</span>，居中对齐，<strong>加粗</strong>，<em>斜体</em></p>
//               <blockquote style='text-align:left;'><span style="color:#ffce54">其</span><span style="color:#a0d468">他</span><span style="color:#38afda">颜</span><span style="color:#967adc">色</span>
//               <span style="color:#a0d468">C</span><span style="color:#48cfad">OL</span><span style="color:#4a89dc">O</span><span style="color:#967adc">R</span><span style="color:#434a54">S</span></blockquote>
//               <p><br></p>
//               <ul>
//                 <li><span style="color:#434a54">list 1</span></li>
//                 <li><span style="color:#434a54">list 2</span></li>
//                 <li><span style="color:#434a54">list 3</span></li>
//               </ul>
//               <pre><code>Block here.Block here.Block here.Block here.</code></pre>
//               <pre><code>Block here.Block here.Block here.Block here.Block here.</code></pre>
//               <pre><code>Block here.Block here.Block here.Block here.Block here.</code></pre>
//               <p><img src="https://image.qiluyidian.mobi/43053508139910678747.jpg"/></p>
//               <p><br></p>
//               <h2>正文示例：乐视金融传将收购数码视讯子公司，拿下互联网、数字电视两张支付牌照</h2>
//               <p>用场景化的方式表达就是，用户可以在观看电视购物频道的时候，直接从电视上进行支付购买商品，不用再通过银行汇款或者货到付款；可以选择对电视上的点播内容进行付费，还可能在电视上对水电煤等公用事业费用进行缴费。</p>
//               <p>一度金融的消息称，乐视金融同数码视讯的接触尚处在高层范围内进行，因此对于收购价格，暂时还不能确定。</p>
//               <p>如果乐视金融拿下数码视讯的两张金融牌照，并且在到期后能够获得央行审核顺利延期，意味着乐视可以通过移动设备和电视两个终端来链接用户的银行卡。</p>
//               <p>乐视金融在去年11月份首度公开亮相的时候，缺少银行和支付两张关键牌照就一直是外界关注的问题。</p>`
//     };
//     this.receiveHtml = this.receiveHtml.bind(this);
//   }
//   receiveHtml(content) {
//     console.log("Recieved content", content);
//   }
//   render() {
//     const uploadConfig = {
//       QINIU_URL: "http://up.qiniu.com", //上传地址，现在暂只支持七牛上传
//       QINIU_IMG_TOKEN_URL: "http://www.yourServerAddress.mobi/getUptokenOfQiniu.do", //请求图片的token
//       QINIU_PFOP: {
//         url: "http://www.yourServerAddress.mobi/doQiniuPicPersist.do" //七牛持久保存请求地址
//       },
//       QINIU_VIDEO_TOKEN_URL: "http://www.yourServerAddress.mobi/getUptokenOfQiniu.do", //请求媒体资源的token
//       QINIU_FILE_TOKEN_URL: "http://www.yourServerAddress.mobi/getUptokenOfQiniu.do?name=patch", //其他资源的token的获取
//       QINIU_IMG_DOMAIN_URL: "https://image.yourServerAddress.mobi", //图片文件地址的前缀
//       QINIU_DOMAIN_VIDEO_URL: "https://video.yourServerAddress.mobi", //视频文件地址的前缀
//       QINIU_DOMAIN_FILE_URL: "https://static.yourServerAddress.com/" //其他文件地址前缀
//     };
//     return (
//       <LzEditor
//         active={true}
//         importContent={this.state.content}
//         cbReceiver={this.receiveHtml}
//         uploadConfig={uploadConfig}
//         fullScreen={false}
//       />
//     );
//   }
// }

class Index5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentDidMount() {
    //console.log(getWeeksStr());
  }
  handleChange(content) {
    this.setState({
      content: content
    });
  }
  getIcons() {
    var icons = [
      "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
      "paragraph fontfamily fontsize | superscript subscript | ",
      "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
      "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
      "horizontal date time  | image emotion spechars | inserttable"
    ];
    return icons;
  }
  getPlugins() {
    return {
      image: {
        uploader: {
          name: "file",
          url: "/api/upload"
        }
      },
      insertvideo: {
        uploader: {
          name: "file",
          url: "/api/upload"
        }
      }
    };
  }
  render() {
    var icons = this.getIcons();
    var plugins = this.getPlugins();
    return (
      <Editor
        ref="editor"
        icons={icons}
        value={this.state.content}
        onChange={this.handleChange.bind(this)}
        plugins={plugins}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    $$state: state.home
  };
}

module.exports = connect(
  mapStateToProps,
  {}
)(Index5);

//or

// function mapStateToProps(state) {
//   return {
//     $$state: state.indexPageReducer
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch(onIncrement()),
//     onDecrement: () => dispatch(onDecrement())
//   }
// }
// module.exports = connect(mapStateToProps, mapDispatchToProps)(IndexPage)
