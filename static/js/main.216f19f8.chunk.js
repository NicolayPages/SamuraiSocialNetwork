(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[2],{12:function(e,t,n){e.exports={wrapperNone:"ErrorPopup_wrapperNone__1EKn_",wrapper:"ErrorPopup_wrapper__JRpyc",wrapperBody:"ErrorPopup_wrapperBody__1uy62",closeWrapper:"ErrorPopup_closeWrapper__1L355",header:"ErrorPopup_header__1p1Sh",title:"ErrorPopup_title__2stoK",close:"ErrorPopup_close__3dTTe",content:"ErrorPopup_content__1GiGB",subtitle:"ErrorPopup_subtitle__3_Suh",image:"ErrorPopup_image__Qr0-o"}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var r=function(e){return e.auth.isAuth},a=function(e){return e.auth.login},c=function(e){return e.auth.userId},s=function(e){return e.auth.captcha},u=function(e){return e.auth.authError},i=function(e){return e.app.initialized}},15:function(e,t,n){e.exports={header:"Header_header__14q2p",container:"Header_container__2zgjm",headerBody:"Header_headerBody__3L2xV",loginBlock:"Header_loginBlock__5-fvZ",login_wrapper:"Header_login_wrapper__1g1hm",login_ava:"Header_login_ava__ck3w4",login:"Header_login__dSwZ1",btn:"Header_btn__8NYfP",logo:"Header_logo__3XlIA"}},18:function(e,t,n){e.exports={Sidebar:"Sidebar_Sidebar__2SyFz",Sidebar__list:"Sidebar_Sidebar__list__2sYKm",sidebar__link:"Sidebar_sidebar__link__2eWD7",icon:"Sidebar_icon__3GoS7",link:"Sidebar_link__2MCA1"}},19:function(e,t,n){e.exports={title:"Friends_title__3sdAS",friend:"Friends_friend__3U11j",flex:"Friends_flex__2amwk",icon:"Friends_icon__3UfN2",name:"Friends_name__10bK-"}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b}));var r=n(3),a=n.n(r),c=n(5),s=n(1),u=n(4),i=n(7),o={userId:null,email:null,login:null,isAuth:!1,captcha:null,authError:null},l=function(e,t,n,r){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n,captcha:r}}},d=function(e,t,n,r,a){return{type:"SET_LOGOUT",data:{userId:e,email:t,login:n,isAuth:r,authError:a}}},f=function(e){return{type:"SET_CAPTCHA",captcha:e}},p=function(e){return{type:"SET_AUTH_ERROR",error:e}},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,o,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.b.getUserData();case 3:(n=e.sent).resultCode===u.a.Success&&(r=n.data,c=r.id,s=r.email,o=r.login,d=r.captcha,t(l(c,s,o,d))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(Object(i.c)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.b.logInUser(e,t,n,r);case 3:(o=a.sent).resultCode==u.a.Success?s(h()):(o.resultCode==u.a.CaptchaIsRequired&&s(O()),l=o.messages.length>0?o.messages[0]:"Some error",s(p(l))),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),s(Object(i.c)(a.t0.message));case 10:case"end":return a.stop()}}),c,null,[[0,7]])})));return function(e){return s.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.b.logOutUser();case 3:e.sent.resultCode==u.a.Success&&t(d(null,null,null,!1,null)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(Object(i.c)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.e.getCaptcha();case 3:n=e.sent,t(f(n.url)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(Object(i.c)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(s.a)(Object(s.a)(Object(s.a)({},e),t.data),{},{isAuth:!0});case"SET_CAPTCHA":return Object(s.a)(Object(s.a)({},e),{},{captcha:t.captcha});case"SET_LOGOUT":return Object(s.a)(Object(s.a)({},e),t.data);case"SET_AUTH_ERROR":return Object(s.a)(Object(s.a)({},e),{},{authError:t.error});default:return e}}},23:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(37),s=n.n(c),u=n(2),i=a.a.memo((function(){return Object(u.jsx)("div",{className:s.a.wrapper,children:Object(u.jsx)("div",{className:s.a.ldsDualRing})})}));t.a=i},28:function(e,t,n){"use strict";t.a=n.p+"static/media/user.4e009506.png"},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return b})),n.d(t,"c",(function(){return O}));var r=n(3),a=n.n(r),c=n(5),s=n(14),u=n(1),i=n(4),o=n(7),l={posts:[{id:1,message:"Hi, how are you",likes:2},{id:2,message:"Hello everyone",likes:12},{id:3,message:"My pet project",likes:5}],profile:null,isFetching:!1,status:"",editMode:!1,localIsFetching:!1,errorMessage:null,ownerPhoto:null},d={addPostActionCreator:function(e){return{type:"ADD_POST",postMessage:e}},setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}},toggleIsFetching:function(e){return{type:"IS_FETCHING",isFetching:e}},setStatus:function(e){return{type:"SET_STATUS",status:e}},deletePost:function(e){return{type:"DELETE_POST",postId:e}},likePost:function(e,t){return{type:"LIKE_POST",postId:e,postLike:t}},setPhoto:function(e){return{type:"SAVE_PHOTO_SUCCESS",photosFiles:e}},toggleLocalIsFetching:function(e){return{type:"LOCAL_IS_FETCHING",localIsFetching:e}},onEditMode:function(){return{type:"ON_EDIT_MODE"}},offEditMode:function(){return{type:"OFF_EDIT_MODE"}},setProfileError:function(e){return{type:"SET_PROFILE_ERROR",errorMessage:e}},setOwnerPhoto:function(e){return{type:"SET_OWNER_PHOTO",photo:e}}},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(d.toggleIsFetching(!0)),t.next=4,i.d.getProfile(e);case 4:r=t.sent,n(d.setUserProfile(r.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(Object(o.c)(t.t0.message));case 11:return t.prev=11,n(d.toggleIsFetching(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.d.getStatus(e);case 3:r=t.sent,n(d.setStatus(r.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(o.c)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.d.updateStatus(e);case 3:t.sent.data.resultCode===i.a.Success&&n(d.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(o.c)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(d.toggleLocalIsFetching(!0)),t.next=4,i.d.updatePhoto(e);case 4:(r=t.sent).data.resultCode===i.a.Success&&n(d.setPhoto(r.data.data.photos)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(Object(o.c)(t.t0.message));case 11:return t.prev=11,n(d.toggleLocalIsFetching(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(d.toggleIsFetching(!0)),c=r().auth.userId,t.next=5,i.d.updateProfile(e);case 5:(s=t.sent).data.resultCode===i.a.Success?(n(f(c)),n(d.offEditMode())):(u=s.data.messages.length>0?s.data.messages[0]:"Some error",n(d.setProfileError(u))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(Object(o.c)(t.t0.message));case 12:return t.prev=12,n(d.toggleIsFetching(!1)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(e,n){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.d.getProfile(e);case 3:r=t.sent,n(d.setOwnerPhoto(r.data.photos.small)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(o.c)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:e.posts.length+2,message:t.postMessage,likes:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[n].concat(Object(s.a)(e.posts))});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"LOCAL_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{localIsFetching:t.localIsFetching});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"LIKE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.postId?Object(u.a)(Object(u.a)({},e),{},{likes:t.postLike}):e}))});case"SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photosFiles})});case"ON_EDIT_MODE":return Object(u.a)(Object(u.a)({},e),{},{editMode:!0});case"OFF_EDIT_MODE":return Object(u.a)(Object(u.a)({},e),{},{editMode:!1});case"SET_PROFILE_ERROR":return Object(u.a)(Object(u.a)({},e),{},{errorMessage:t.errorMessage});case"SET_OWNER_PHOTO":return Object(u.a)(Object(u.a)({},e),{},{ownerPhoto:t.photo});default:return e}}},37:function(e,t,n){e.exports={ldsDualRing:"Preloader_ldsDualRing__3S__x",wrapper:"Preloader_wrapper__2Qfjg"}},4:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return r}));var r,a=n(56),c=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"81df0079-0492-4de1-a05f-7da3384208ab"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null==r?"":"&friend=".concat(r))).then((function(e){return e.data}))},followUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return c.delete("follow/".concat(e)).then((function(e){return e.data}))},getFiends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return c.get("users?page=".concat(e,"&count=").concat(t,"&friend=true")).then((function(e){return e.data}))}},u={getProfile:function(e){return c.get("profile/".concat(e))},getStatus:function(e){return c.get("profile/status/".concat(e))},updateStatus:function(e){return c.put("profile/status",{status:e})},getUsersForProfile:function(){return c.get("users").then((function(e){return e.data}))},updatePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfile:function(e){return c.put("profile",e)}},i={getUserData:function(){return c.get("auth/me").then((function(e){return e.data}))},getUserPhoto:function(){return c.get("profile/").then((function(e){return e.data}))},logInUser:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logOutUser:function(){return c.delete("auth/login").then((function(e){return e.data}))}},o={getCaptcha:function(){return c.get("security/get-captcha-url").then((function(e){return e.data}))}},l={startChatting:function(e){return c.put("dialogs/".concat(e),e).then((function(e){return e}))},getMessages:function(e){return c.get("dialogs/".concat(e,"/messages")).then((function(e){return e.data}))}};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}))},40:function(e,t,n){e.exports={ldsDualRing:"Preloader_ldsDualRing__iMzi9",wrapper:"Preloader_wrapper__kzYrf"}},41:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"d",(function(){return l}));var r=function(e){return e.profilePage.profile},a=function(e){return e.profilePage.isFetching},c=function(e){return e.profilePage.status},s=function(e){return e.profilePage.posts},u=function(e){return e.profilePage.editMode},i=function(e){return e.profilePage.localIsFetching},o=function(e){return e.profilePage.errorMessage},l=function(e){return e.profilePage.ownerPhoto}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f}));var r=n(3),a=n.n(r),c=n(5),s=n(14),u=n(1),i=n(4),o={dialogs:[{id:1,name:"Billy"},{id:2,name:"Sergey"},{id:3,name:"Alex"}],messages:[{id:1,name:"Billy",message:"Oh shit Im sorry"},{id:2,name:"Alex",message:"Sorry fot what"}],isFetching:!1},l={addMessageActionCreator:function(e){return{type:"ADD_MESSAGE",message:e}},getNewMessages:function(e){return{type:"SET_NEW_MESSAGES",data:e}},toggleIsFetching:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}}},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(l.toggleIsFetching(!0)),t.next=4,i.c.getMessages(e);case 4:(r=t.sent).resultCode==i.a.Success&&console.log(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,n(l.toggleIsFetching(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(l.toggleIsFetching(!0)),t.next=4,i.c.startChatting(e);case 4:t.sent,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.prev=9,n(l.toggleIsFetching(!1)),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,7,9,12]])})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var n={id:4,name:"Dmitriy",message:t.message};return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(s.a)(e.messages),[n])});case"SET_NEW_MESSAGES":return Object(u.a)(Object(u.a)({},e),{},{dialogs:[].concat(Object(s.a)(e.dialogs),[t.data])});case"TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});default:return e}}},51:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(8),s=n.p+"static/media/error.d24ec31a.jpg",u=n(7),i=function(e){return e.errors.errorMessage},o=n(12),l=n.n(o),d=n(2),f=a.a.memo((function(){var e=Object(c.c)(i),t=Object(c.b)(),n=u.a.deactivateMode,r=null!=e;return Object(d.jsx)("div",{className:r?l.a.wrapper:l.a.wrapperNone,children:Object(d.jsxs)("div",{className:l.a.wrapperBody,children:[Object(d.jsxs)("div",{className:l.a.header,children:[Object(d.jsx)("h1",{className:l.a.title,children:"Oops, something is wrong!"}),Object(d.jsx)("div",{className:l.a.closeWrapper,children:Object(d.jsx)("p",{className:l.a.close,onClick:function(){t(n())},children:"x"})})]}),Object(d.jsxs)("div",{className:l.a.content,children:[Object(d.jsx)("h2",{className:l.a.subtitle,children:e}),Object(d.jsx)("div",{className:l.a.image,children:Object(d.jsx)("img",{src:s,alt:""})})]})]})})}));t.a=f},52:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return E})),n.d(t,"d",(function(){return S}));var r=n(3),a=n.n(r),c=n(5),s=n(14),u=n(1),i=n(7),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),r):e}))},l=n(4),d={users:[],pageSize:10,totalUserCount:0,currentPage:1,isFetching:!1,isFollowing:[],filter:{term:"",friend:null}},f=function(e){return{type:"FOLLOW",userId:e}},p=function(e){return{type:"UN_FOLLOW",userId:e}},h=function(e){return{type:"SET_USERS",users:e}},g=function(e){return{type:"SET_FILTER",filter:e}},b=function(e){return{type:"SET_PAGE",currentPage:e}},O=function(e){return{type:"SET_TOTAL_COUNT",totalCount:e}},j=function(e){return{type:"IS_FETCHING",isFetching:e}},_=function(e,t){return{type:"IS_FOLLOWING",isFollowing:e,userId:t}},v=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(_(!0,n)),e.next=4,r(n);case 4:0==e.sent.resultCode&&t(c(n)),t(_(!1,n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Object(i.c)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),m=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c(j(!0)),c(g(n)),c(b(e)),r.next=6,l.f.getUsers(e,t,n.term,n.friend);case 6:s=r.sent,c(h(s.items)),c(O(s.totalCount)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),c(Object(i.c)(r.t0.message));case 14:return r.prev=14,c(j(!1)),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[0,11,14,17]])})));return function(e){return r.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{v(n,e,l.f.followUser.bind(l.f),f)}catch(r){n(Object(i.c)(r.message))}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{v(n,e,l.f.unfollowUser.bind(l.f),p)}catch(r){n(Object(i.c)(r.message))}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case"UN_FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case"SET_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUserCount:t.totalCount});case"IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"IS_FOLLOWING":return Object(u.a)(Object(u.a)({},e),{},{isFollowing:t.isFollowing?[].concat(Object(s.a)(e.isFollowing),[t.userId]):e.isFollowing.filter((function(e){return e!=t.userId}))});case"SET_FILTER":return Object(u.a)(Object(u.a)({},e),{},{filter:t.filter});default:return e}}},53:function(e,t,n){"use strict";n.d(t,"c",(function(){return P})),n.d(t,"d",(function(){return N})),n.d(t,"b",(function(){return C}));var r=n(3),a=n.n(r),c=n(5),s=n(14),u=n(1),i={"messages-received":[],"status-changed":[]},o=null,l=function(){g("pending"),setTimeout(b,3e3)},d=function(e){var t=JSON.parse(e.data);i["messages-received"].forEach((function(e){return e(t)}))},f=function(){g("ready")},p=function(){g("error"),console.error("REFRESH PAGE")},h=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",d),null===(n=o)||void 0===n||n.removeEventListener("open",f),null===(r=o)||void 0===r||r.removeEventListener("error",p)},g=function(e){i["status-changed"].forEach((function(t){return t(e)}))};function b(){var e;h(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),g("pending"),o.addEventListener("close",l),o.addEventListener("message",d),o.addEventListener("open",f),o.addEventListener("error",p)}var O=function(){b()},j=function(){var e;i["messages-received"]=[],i["status-changed"]=[],h(),null===(e=o)||void 0===e||e.close()},_=function(e,t){return i[e].push(t),function(){i[e]=i[e].filter((function(e){return e!==t}))}},v=function(e,t){i[e]=i[e].filter((function(e){return e!==t}))},m=function(e){var t;null===(t=o)||void 0===t||t.send(e)},E=n(98),S={messages:[],status:"pending"},x=function(e){return{type:"SN/chat/MESSAGES_RECEVIED",payload:{messages:e}}},w=function(e){return{type:"SN/chat/STATUS_CHANGED",payload:{status:e}}},T=null,y=function(e){return null===T&&(T=function(t){e(x(t))}),T},F=null,I=function(e){return null===F&&(F=function(t){e(w(t))}),F},P=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(),_("messages-received",y(t)),_("status-changed",I(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v("messages-received",y(t)),v("status-changed",I(t)),j();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/chat/MESSAGES_RECEVIED":return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(s.a)(e.messages),Object(s.a)(t.payload.messages.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:Object(E.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"SN/chat/STATUS_CHANGED":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload.status});default:return e}}},64:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s}));var r=n(1),a={errorMessage:null,errorsMode:!0},c={activateMode:function(e){return{type:"ON_MODE",errorMessage:e}},deactivateMode:function(){return{type:"OFF_MODE"}}},s=function(e){return function(t){t(c.activateMode(e))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_MODE":return Object(r.a)(Object(r.a)({},e),{},{errorsMode:!0,errorMessage:t.errorMessage});case"OFF_MODE":return Object(r.a)(Object(r.a)({},e),{},{errorsMode:!1,errorMessage:null});default:return e}}},70:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),s=n.n(c),u=(n(64),n(8)),i=n(6),o=n(22),l=(n(70),n(23)),d=r.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,294))})),f=r.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,295))})),p=r.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(8)]).then(n.bind(null,296))})),h=r.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,292))})),g=[{path:"/profile/:userId?",component:d,exact:!0},{path:"/dialogs",component:f,exact:!1},{path:"/users",component:p,exact:!1},{path:"/chat",component:r.lazy((function(){return n.e(9).then(n.bind(null,297))})),exact:!1}],b=[{path:"/login",component:h,exact:!1},{path:"/users",component:p,exact:!1},{path:"/profile/:userId",component:d,exact:!0}],O=n(13),j=n(2),_=function(){return Object(u.c)(O.d)?Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(l.a,{}),children:Object(j.jsxs)(i.d,{children:[g.map((function(e){return Object(j.jsx)(i.b,{exact:e.exact,path:e.path,component:e.component},e.path)})),Object(j.jsx)(i.a,{to:"/profile"})]})}):Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(l.a,{}),children:Object(j.jsxs)(i.d,{children:[b.map((function(e){return Object(j.jsx)(i.b,{exact:e.exact,path:e.path,component:e.component},e.path)})),Object(j.jsx)(i.a,{to:"/login"})]})})},v=n(51),m=n(16),E=n.p+"static/media/logo.fcb582b0.png",S=n(28),x=n(21),w=n(29),T=n(41),y=n(15),F=n.n(y),I=a.a.memo((function(){var e=Object(u.c)(O.d),t=Object(u.c)(O.e),n=Object(u.c)(O.f),a=Object(u.c)(T.d),c=Object(u.b)();Object(r.useEffect)((function(){null!=n&&c(Object(w.c)(n))}),[]);return Object(j.jsx)(P,{ownerPhoto:a,isAuth:e,login:t,authUserLogOut:function(){c(Object(x.c)())}})})),P=a.a.memo((function(e){var t=e.isAuth,n=e.login,r=e.authUserLogOut,a=e.ownerPhoto;return Object(j.jsx)("header",{className:F.a.header,children:Object(j.jsx)("div",{className:F.a.container,children:Object(j.jsxs)("div",{className:F.a.headerBody,children:[Object(j.jsxs)("div",{className:F.a.logo,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:E,alt:"logo"})}),Object(j.jsx)("p",{children:"SamuraiNetwork"})]}),Object(j.jsx)("div",{className:F.a.loginBlock,children:t?Object(j.jsxs)("div",{className:F.a.login_wrapper,children:[Object(j.jsx)("div",{className:F.a.login_ava,children:Object(j.jsx)("img",{src:a||S.a})}),Object(j.jsx)("p",{className:F.a.login,children:n}),Object(j.jsx)("button",{onClick:r,className:F.a.btn,children:"Log Out"})]}):Object(j.jsx)(m.b,{to:"/login",children:"Log In"})})]})})})})),N=n(3),C=n.n(N),k=n(5),L=n(1),A=n(4),U=n(7),M=n(99),D=n(100),R=n(101),G=n(102),H={links:[{id:1,address:"profile",name:"Profile",icon:M.a},{id:2,address:"dialogs",name:"Dialogs",icon:D.a},{id:3,address:"chat",name:"Chat",icon:R.a},{id:4,address:"users",name:"Users",icon:G.a}],friends:[],pageSize:3,totalUserCount:0,currentPage:1,isFetching:!1},z=function(e){return{type:"SET_FRIENDS",friends:e}},W=function(e){return{type:"SET_TOTAL_COUNT",totalCount:e}},B=function(e){return{type:"SET_IS_FETCHING",isFetching:e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FRIENDS":return Object(L.a)(Object(L.a)({},e),{},{friends:t.friends});case"SET_PAGE":return Object(L.a)(Object(L.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_COUNT":return Object(L.a)(Object(L.a)({},e),{},{totalUserCount:t.totalCount});case"SET_IS_FETCHING":return Object(L.a)(Object(L.a)({},e),{},{isFetching:t.isFetching});default:return e}},V=function(e){return e.sidebar.links},q=function(e){return e.sidebar.friends},J=function(e){return e.sidebar.pageSize},Y=function(e){return e.sidebar.currentPage},Z=function(e){return e.sidebar.isFetching},Q=n(40),X=n.n(Q),$=a.a.memo((function(){return Object(j.jsx)("div",{className:X.a.wrapper,children:Object(j.jsx)("div",{className:X.a.ldsDualRing})})})),ee=n(19),te=n.n(ee),ne=a.a.memo((function(e){var t=e.friends,n=e.isFetching,r=t.map((function(e){return Object(j.jsx)(re,{name:e.name,photo:e.photos.small,id:e.id},e.id)}));return Object(j.jsxs)("div",{className:te.a.friends,children:[Object(j.jsx)("h2",{className:te.a.title,children:"Friends"}),Object(j.jsx)("div",{className:te.a.flex,children:n?Object(j.jsx)($,{}):r})]})})),re=a.a.memo((function(e){var t=e.name,n=e.id,r=e.photo;return Object(j.jsxs)("div",{className:te.a.friend,children:[Object(j.jsx)(m.b,{className:te.a.icon,to:"/profile/"+n,children:Object(j.jsx)("img",{src:r||S.a,alt:""})}),Object(j.jsx)("p",{className:te.a.name,children:t})]})})),ae=n(18),ce=n.n(ae),se=a.a.memo((function(e){var t=e.address,n=e.name,r="/"+t;return Object(j.jsxs)("li",{className:ce.a.sidebar__link,children:[Object(j.jsx)("span",{className:ce.a.icon,children:Object(j.jsx)(e.icon,{})}),Object(j.jsx)(m.c,{to:r,className:ce.a.link,activeClassName:ce.a.active,children:n})]})})),ue=a.a.memo((function(){var e=Object(u.c)(V),t=Object(u.c)(q),n=Object(u.c)(O.d),a=Object(u.c)(Z),c=Object(u.c)(Y),s=Object(u.c)(J),i=Object(u.b)();return Object(r.useEffect)((function(){i(function(e,t){return function(){var n=Object(k.a)(C.a.mark((function n(r){var a;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(B(!0)),n.next=4,A.f.getFiends(e,t);case 4:a=n.sent,r(z(a.items)),r(W(a.totalCount)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r(Object(U.c)(n.t0.message));case 12:return n.prev=12,r(B(!1)),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}()}(c,s))}),[]),Object(j.jsx)(ie,{links:e,friends:t,isAuth:n,isFetching:a})})),ie=a.a.memo((function(e){var t=e.links.map((function(e){return Object(j.jsx)(se,{name:e.name,address:e.address,icon:e.icon},e.id)}));return Object(j.jsxs)("nav",{className:ce.a.Sidebar,children:[Object(j.jsx)("ul",{className:ce.a.Sidebar__list,children:t}),e.isAuth&&Object(j.jsx)(ne,{isFetching:e.isFetching,friends:e.friends})]})})),oe={initialized:!1},le=function(){return{type:"INITIALIZED_SUCCESS"}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;return"INITIALIZED_SUCCESS"===t.type?Object(L.a)(Object(L.a)({},e),{},{initialized:!0}):e},fe=Object(o.c)(i.i)((function(){var e=Object(u.c)(O.c),t=Object(u.b)();return Object(r.useEffect)((function(){t((function(e){try{var t=e(Object(x.a)());Promise.all([t]).then((function(){e(le())}))}catch(n){e(Object(U.c)(n.message))}}))}),[]),e?Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(I,{}),Object(j.jsx)(ue,{}),Object(j.jsx)("div",{className:"app__wrapper_content",children:Object(j.jsx)(_,{})}),Object(j.jsx)(v.a,{})]}):Object(j.jsx)(l.a,{})})),pe=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,293)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},he=n(42),ge=n(52),be=n(58),Oe=n(53),je=Object(o.b)({profilePage:w.b,dialogsPage:he.b,sidebar:K,usersPage:ge.a,auth:x.d,app:de,errors:U.b,chat:Oe.a}),_e=Object(o.d)(je,Object(o.a)(be.a));s.a.render(Object(j.jsx)(m.a,{children:Object(j.jsx)(u.a,{store:_e,children:Object(j.jsx)(fe,{})})}),document.getElementById("root")),pe()}},[[94,3,4]]]);
//# sourceMappingURL=main.216f19f8.chunk.js.map