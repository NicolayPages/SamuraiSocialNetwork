(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[6],{158:function(e,t,s){e.exports={item:"Post_item__1WGlG",text:"Post_text__3zNlr",flex:"Post_flex__3CvHK",like:"Post_like__1HP4w",actions:"Post_actions__1peV7",btnIcon:"Post_btnIcon__3v7YF",dis:"Post_dis__2m27C"}},159:function(e,t,s){e.exports={Posts:"Posts_Posts__1_1Z5",Posts__title:"Posts_Posts__title__GeNkt",Posts__sending:"Posts_Posts__sending__3iegi",Posts__wrapper:"Posts_Posts__wrapper__2vEm3",Posts__post:"Posts_Posts__post__2Enmy",Posts__icon:"Posts_Posts__icon__3sfki",Posts__text:"Posts_Posts__text__2X688",form:"Posts_form__3jchF",btn:"Posts_btn__2_JTr",area:"Posts_area__1clsW",error:"Posts_error__FfJYi"}},262:function(e,t,s){e.exports={Profile:"Profile_Profile__3XeHV",Profile__image:"Profile_Profile__image__tRghl",Profile__user:"Profile_Profile__user__RtUqW"}},263:function(e,t,s){e.exports={subtitle:"EditForm_subtitle__Rb9W8",contactTitle:"EditForm_contactTitle__2MCzS",form:"EditForm_form__3_0Hz",inputWrapper:"EditForm_inputWrapper__3VV5b",input:"EditForm_input__o5VHQ",textarea:"EditForm_textarea__26nqn",error:"EditForm_error__B2CXQ",inputWrapperCheckbox:"EditForm_inputWrapperCheckbox__3czy3",inputCheckbox:"EditForm_inputCheckbox__2tCwu",btnWrapper:"EditForm_btnWrapper__1vCpY",btn:"EditForm_btn__FUaMO",wrapper:"EditForm_wrapper__vrjc8",contacts:"EditForm_contacts__2CYBo",flex:"EditForm_flex__2hKdm",header:"EditForm_header__3OoYA",cancel:"EditForm_cancel__3nXgU"}},264:function(e,t,s){e.exports={input:"Status_input__2enSH"}},265:function(e,t,s){e.exports={User:"User_User__28EF6",container:"User_container__2tSxj",User__ava:"User_User__ava__1Hh5R",loader:"User_loader__sSBap",ava:"User_ava__emFTF",User__info:"User_User__info__WZpq9",User__name:"User_User__name__1LoXC",User__descript:"User_User__descript__3rdZk",contacts:"User_contacts__9zUal",btnContainer:"User_btnContainer__3y99n",btn:"User_btn__qaBSy",input__wrapper:"User_input__wrapper__oJ4Y3",input__file:"User_input__file__3sq_x",input__fileIconWrapper:"User_input__fileIconWrapper__3Dt34",input__fileButtonText:"User_input__fileButtonText__29BfC",input__fileButton:"User_input__fileButton__16MZM",icon:"User_icon__3d1NR"}},294:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(8),o=s(6),i=s(20),r=s(25),l=s(16),A=s(37),d=s(30),u=s.p+"static/media/image-profile.9bb42bbe.jpg",b=s(40),j=s(106),p=s(99),m=s(158),x=s.n(m),O=s(24),h=s(2),_=c.a.memo((function(e){var t=e.message,s=e.likes,c=e.authId,n=e.id,o=e.profile,i=e.onLikePost,r=e.onDeletePost,l=Object(a.useState)(s),A=Object(p.a)(l,2),d=A[0],u=A[1],b=Object(a.useState)(!1),j=Object(p.a)(b,2),m=j[0],_=j[1];Object(a.useEffect)((function(){u(s)}),[s]);return Object(h.jsxs)("div",{className:x.a.item,children:[Object(h.jsxs)("div",{className:x.a.flex,children:[Object(h.jsx)("img",{src:null!=o.photos.small?o.photos.small:O.a,alt:"icon"}),Object(h.jsx)("p",{className:x.a.text,children:t})]}),Object(h.jsxs)("div",{className:x.a.actions,children:[Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:x.a.like,children:["likes: ",s]})}),null!=c&&Object(h.jsxs)("div",{className:x.a.flex,children:[Object(h.jsx)("button",{onClick:m?function(){u(d--),i(n,d),_(!1)}:function(){u(d++),i(n,d),_(!0)},className:x.a.btnIcon,children:Object(h.jsx)("img",{src:m?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABIQAAASEBDb+0VwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKrSURBVFiFxZfNS1RRGMZ/75mx0mtQ62pXOU4WqROGhDqkDhm0cCEk1aqibNUiqP6EoIIggnDTroKoNpLO2J0RURI/wkqTbFcRFBThpDbd+7aYxsqvmbHsPsvz8Ty/cw/c+1xRVbyU8TQ9F4DRSMSKh8P+fI3j4bB/NBKxsq2T+Vcw2dS0NvU9eVyUaiAEbANcgXcqdKijN0u7e4YXMxtrqC0X9IQgB4FNpA/4ChhUoa/Ab7Vv7eiYXRJgojEcUnVvAcHlqaXdceRs0LanAIYOhYqKpq3LAqeyHPi5C8eC0cTIAoDx+ro2Eb0G+LKYZPTMXzC7z/niVy30xYGKHPelVLSttKunfQ7gZUPtTmAQWJOjSUadKriiHMhz36zrOJXBx70vZLCyssDaaD0ByvM0+VsNJz8l95riDVaLB+EAFcUbrBajolUehAOgolUGJOQVAEjIAGXeAVBmgEmv0gVeG4QBrwAUBoyoPPEMQBkws2btXeCtB/nv1TF3zK7OzqSInv/f6YJcDNr2VPpbICIv62v6gf/0TpChQCyxB1VN9wFVdX3mCPBx1aPhsw89ys+v4FwhCT6yJ1E5BMysYn4KleZt0cR4ZuCPRhSIxftBjwDuqsQrJ0picfv3oQWVLBDtuadKK/DtH0Y7ICcDscSt+RMLKllGY401+43KfWD9X4bPqOrh0ljPg8UmlwSAdMfzwUOFLSsM/2Awzdujdu9SC5ZtxcFoYsTxpXaj3F9BeJf73exaLhyyPIHfNdFQd1rRK8C6LEu/oXIh0J24Sg7mOQMAjEfCZaJ6G9Udi80rjKuY1mCX/TRXz7wAAN5UVxdOWQWXgDZ+XaGLcqP4a+rc5r6+6Xz88gbIaKIxHHJxrwMYzJmSLntwJT4rBkjvFgHI5a5XB+AfyPO/4x9FiBTsX64VCwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARFSURBVFiFxZddiFVVFMd/a50xRYeYzJxz5gqTNIow4j1HxzSlRKFCY8QeFEGofAt86LGEAiXx40XIEKSnqSfpwUTIlwoH/NbJezOFGAsTmrk3bXSSCUbn7r16uGcmdT7uvYPagv2y91r/32Kdfc5aR8yM/9O0okdbZhYilf0eNRGlLTOrotuoCiRzGzz3tonYMjOWAbMxBlGuYXylQ+4QV24OjKm2cHa9nxK8j/AOnnkI04CbIpw3k/PK1IPkrvePn8CScLn3chhoTnfuGnQLFoE0AQIU1HidfOHqQ/A4avXCd0AEGFivIQWB+cCzqdcNVdvMj8Vzw2EjpfVJtM17OQk0Y3JAvS7QfLEhyBWWaq44R521AB1A5IVO4kzyHzyTeKEzhXeosxbNFecEucJSzRcb1OsCTA4Azd7LSZ9E2x6uQDZc6FVywD+Gvhfkeo6OWWLAx00fI/YpWL96XgXwykmQBkw+0XzvrvFiXZLZIPgOYIZ6S/ipeAUzoxSHnS4OrZQNt5oZlZaLwx0uDq0UR6dLcXTaxaG5ONxRTWwpG24tx4adZoaU4qYNgv/G4HyQL75CNe9lm0zxLuwGXkx3ftegOJ8uG6oYKyIuDs8KLDP0bRXcqvKJ7q0KDpRBsucB1T1VwYEyQ/cCCG6VCtoKEASln6sSSE2HZnYYcsaQMzo0s6OW2GGWoK3i4rAXaNB8sR4zX4sQq6UOgBNWqilORH0cDgD9dUAAeDYiNYlMBjxsGxGu4YFABS4CM+huWjQpsclYmTVDoEtNuADg8SufFt+LXwFgcEGtXAFEeeNpJSDCm2kCFzXQ4vfAVTPaXTZsf9Jwlw3bzWjH+CUYqP+h/ClOGld49BRQVPdMK5dv3Hki9EXNz/ng/lUgVNPXyPecKjej3J9ngENA5IN7nz8ROJBqR4h9Qb7nFDzQDXXq/Y+AXpAtPmna/djhSdNukC1Ar+r9D0e4Ix7n+u6q+rVAH9h2n4TjdrXa4eEusO1An6pfS9ftv0cOR3WsOBO7OLzt4tBcNtxZTYebsHNmw51pt7xtcSZ+9HzswMXREhc33kkD91k6N9S0QFwc7itrNN6xxdGSsfxGz4TDFkcve+E48DzwtTZMe5cT1werqvnqudN8/+CXwCagT4115AsXxnIdPwGAeM58L+448JJhp4Mg2EBXz18Twtsys5xzRwVZCfymFqwj/0f3eO4TJwCwOHrBeY6JsBz4VXHryN28NqZvMnueJzgOtJhxLlDWc6lwayL5yvP+pcKtYHrdGhGOAC2e4CxJZnTfSDIrPcFZoEWEI8H0ujWV4MA4l3DsS6UubtyfXszBUjbc9MCct8nF4WB64fYbaLW6lR/BI5aO1J8BirEdAGEP4IEPNFc4WItezQkAuCR6S+AwUJ9uDRhsDnKFb2vVmlQCQPoz4o8BqOl68j25ychMPgGANpkCUPVE/NgTeAz2L0Xy140C8242AAAAAElFTkSuQmCC",alt:"btn"})}),c===o.userId&&Object(h.jsx)("button",{onClick:function(){r(n)},className:x.a.btnIcon,children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOmSURBVFiFtZfdTxxlFMZ/Z3ZhYWcWTC1NTdRak3qjoX4BaYzJAtJYiDeaWG/k0gsT45VRb9CojcWkif+BetFqTPTK0lQKbEzIgqQftFEvmhSN2hLrYoEZlgVmjhd8zcLszLC0z9057znned6vM/MKMVE41taQKmmPCh0Ch1EeQbgPAOUOwu+qcgVheHExebZpdHQ+Tl2JCpjrbH3MgHeB14B0TL0LwNeuIf2Ng+PXqxKgR47UO2nvY9C3gWRM4q1YBj433XSf5HKLsQXMdrUdSrj6PcITVRKXQWHMSLovm+cv3ooU4Lzw7FPqGecRmu4GuQ9/gfRYQ+NXKwpYm/loJXJpaATTCqdxbHRutrIIV1us3MT0NgGazdY5iYUx4HAg+d4m0l99B6lUuIDSIgu9r6CFf4PHhYumk3he8vki+A6Xkyh+Uol8vbA3fRPZszeUXwu3oVQKCeAZO73yHvDBqh42rtovVH/adwQBW109ZOUmppMAa/c8kDzZ1Y1x4GBVRN4fU6wMDmzzK1hiSB/wphSOtTWklvQWFZpM+tsBZM/9VQnQmQILr3ZXGnaKizUPGKmS9lQiB1DHrop8NTe0G5t1dUvdhgodoVXszSKlUydYGRncsJdPf8HymS837JWRQUqnTvhyI8V3JCXs5APqE+BNXkIyGWjvAsD99RoANevj13/Dm7y0mTs/F8EvzQYQesJ0PtZHLTjXDs8VeNQAGkKLhO/jrgQAjUZklV2sQJxcAwjdqBizqJwbvXqzBjB1zwRErIDCDUNVroRG7UJAjNxJA2E4LOJe3gKUIaPo1v8AOJWLRN3lkPrh4p2ilz5n7MvlbOCbygJ83UyEsn8YkTXfhqPMDmvjqnJmXy5nJwFcQ/oTnvay2dQ24VuB2jfeQh4+sGHXHH+9jDD54kskHm8OzN2CpRrDO4l/OnZn62fAO9tCxcD8cRQkumWUQT2co8+BegFjctIaHn8fVvsAAKab7lMYCyqk/83sjBxWcwLIFfJmqvDhul32U2pnW/aTkJ+Bh/x+yTSAldmZAns+4GOkNw1NtqaH838HCgCwO9uaQc8CD+6MMRJ/Ioke60L+mt+5bWOtofGrWrv8NPDT3WJWyONq61byQAEAmXOXb5u1M0cV/YiQHhEDS6CfWrUz7f63gB+Rj1M727JfDOlToRcwYxI7ip6uEfrrLkzcCAuMFLCOf7JZqz7h9IC0i/AkykFYe57DHYQphcugI8UVc2CtwUXif8gpb9cx33AXAAAAAElFTkSuQmCC",alt:"btn"})})]})]})]})})),f=s(159),N=s.n(f),g=s(114),v=c.a.memo((function(){var e=Object(n.d)(A.d),t=Object(n.d)(A.e),s=Object(n.d)(l.f),a=Object(n.c)(),c=r.a.addPostActionCreator,o=r.a.deletePost,i=r.a.likePost;return Object(h.jsx)(U,{profile:t,posts:e,authId:s,onAddPost:function(e){a(c(e))},onDeletePost:function(e){a(o(e))},onLikePost:function(e,t){a(i(e,t))}})})),U=c.a.memo((function(e){var t=e.profile,s=e.posts,a=e.authId,c=e.onAddPost,n=e.onDeletePost,o=e.onLikePost,i=s.map((function(e){return Object(h.jsx)(_,{profile:t,onLikePost:o,onDeletePost:n,authId:a,id:e.id,message:e.message,likes:e.likes},e.id)}));return Object(h.jsxs)("div",{className:N.a.Posts,children:[Object(h.jsx)("h2",{className:N.a.Posts__title,children:"My posts"}),(null===t||void 0===t?void 0:t.userId)==a&&Object(h.jsx)(C,{onAddPost:c}),Object(h.jsx)("div",{className:N.a.Posts__wrapper,children:i})]})})),C=c.a.memo((function(e){var t=g.a().shape({postsFormMessage:g.b().required("Field is required")});return Object(h.jsx)("div",{children:Object(h.jsx)(j.c,{initialValues:{postsFormMessage:""},onSubmit:function(t,s){e.onAddPost(t.postsFormMessage),s.resetForm(!0)},className:N.a.formWrapper,validationSchema:t,children:function(e){e.errors,e.touched;return Object(h.jsxs)(j.b,{className:N.a.form,children:[Object(h.jsx)(j.a,{component:"textarea",name:"postsFormMessage",type:"text",className:N.a.area,placeholder:"Write your news..."}),Object(h.jsx)("button",{className:N.a.btn,children:"send"})]})}})})})),P=s(262),B=s.n(P),F=s.p+"static/media/download.ee7b08b2.png",k=s.p+"static/media/preloader.0324526f.gif",w=s(263),I=s.n(w),S=c.a.memo((function(){var e=Object(n.d)(A.e),t=Object(n.d)(A.b),s=Object(n.d)(A.f),a=Object(n.c)(),c=r.a.offEditMode,o=r.a.setProfileError;return t?Object(h.jsx)(d.a,{}):Object(h.jsx)("div",{className:I.a.wrapper,children:Object(h.jsx)("div",{className:I.a.userSettings,children:Object(h.jsx)(E,{profile:e,onSubmit:function(e){a(Object(r.f)(e))},offUserEditMode:function(){a(c()),a(o(null))},errorMessage:s})})})})),E=function(e){var t=g.a().shape({fullName:g.b().max(30,"Your name is too long").required("Field is required"),aboutMe:g.b().max(100,"Your description is too long").required("Field is required"),lookingForAJobDescription:g.b().max(200,"Your description is too long").required("Field is required")}),s=e.onSubmit,a=e.offUserEditMode,c=e.profile,n=e.errorMessage,o=c||{fullName:"",aboutMe:"",lookingForAJob:!1,lookingForAJobDescription:"",contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""}};return Object(h.jsx)(j.c,{initialValues:o,validationSchema:t,onSubmit:function(e){s(e)},children:function(e){var t=e.errors,s=e.touched;return Object(h.jsxs)(j.b,{className:I.a.form,children:[Object(h.jsxs)("div",{className:I.a.header,children:[Object(h.jsx)("h2",{className:I.a.subtitle,children:"Edit profile data"}),Object(h.jsx)("p",{className:I.a.cancel,onClick:a,children:"X"})]}),Object(h.jsxs)("div",{className:I.a.flex,children:[Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input+" "+(t.fullName&&s.fullName?I.a.error:null),type:"text",placeholder:t.fullName&&s.fullName?t.fullName:"Full name",tabIndex:1,name:"fullName"})}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input+" "+(t.aboutMe&&s.aboutMe?I.a.error:null),type:"text",placeholder:t.aboutMe&&s.aboutMe?t.aboutMe:"About me",tabIndex:1,name:"aboutMe"})})]}),Object(h.jsxs)("div",{className:I.a.inputWrapperCheckbox,children:[Object(h.jsx)(j.a,{component:"input",className:I.a.inputCheckbox,type:"checkbox",tabIndex:2,name:"lookingForAJob"}),Object(h.jsx)("span",{children:"Are you looking a job?"})]}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"textarea",className:I.a.textarea+" "+(t.lookingForAJobDescription&&s.lookingForAJobDescription?I.a.error:null),placeholder:t.lookingForAJobDescription&&s.lookingForAJobDescription?t.lookingForAJobDescription:"Description your skills",tabIndex:3,name:"lookingForAJobDescription"})}),Object(h.jsx)("h3",{className:I.a.contactTitle,children:"My contacts"}),Object(h.jsxs)("div",{className:I.a.contacts,children:[Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input,type:"text",placeholder:"Link to your github",tabIndex:4,name:"contacts.github"})}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input,type:"text",placeholder:"Link to your vk",tabIndex:5,name:"contacts.vk"})}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input,type:"text",placeholder:"Link to your facebook",tabIndex:6,name:"contacts.facebook"})}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input,type:"text",placeholder:"Link to your instagram",tabIndex:7,name:"contacts.instagram"})}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input,type:"text",placeholder:"Link to your twitter",tabIndex:8,name:"contacts.twitter"})}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input,type:"text",placeholder:"Link to your website",tabIndex:9,name:"contacts.website"})}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input,type:"text",placeholder:"Link to your youtube",tabIndex:10,name:"contacts.youtube"})}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(j.a,{component:"input",className:I.a.input,type:"text",placeholder:"Link to your mainLink",tabIndex:11,name:"contacts.mainLink"})})]}),n&&Object(h.jsx)("p",{className:I.a.error,children:n}),Object(h.jsx)("div",{className:I.a.btnWrapper,children:Object(h.jsx)("button",{className:I.a.btn,children:"Update profile data"})})]})}})},Y=s(264),y=s.n(Y),L=c.a.memo((function(){var e=Object(n.d)(A.g),t=Object(n.d)(A.e),s=Object(n.d)(l.f),c=Object(n.c)(),o=Object(a.useState)(!1),i=Object(p.a)(o,2),d=i[0],u=i[1],b=Object(a.useState)(e),j=Object(p.a)(b,2),m=j[0],x=j[1];return Object(a.useEffect)((function(){x(e)}),[e]),Object(h.jsxs)("div",{children:[!d&&Object(h.jsx)("div",{className:y.a.status,children:Object(h.jsx)("p",{onDoubleClick:s==(null===t||void 0===t?void 0:t.userId)?function(){u(!0)}:void 0,children:e||"--------------"})}),d&&Object(h.jsx)("div",{className:y.a.input,children:Object(h.jsx)("input",{autoFocus:!0,type:"text",onBlur:function(){u(!1),c(Object(r.g)(m))},onChange:function(e){x(e.currentTarget.value)},value:m})})]})})),R=s(265),V=s.n(R),D=c.a.memo((function(e){var t=e.isOwner,s=e.editMode,a=e.profile,c=e.localIsFetching,n=e.updatePhoto,o=e.onEditUserMode;return Object(h.jsxs)("div",{className:V.a.User,children:[Object(h.jsxs)("div",{className:V.a.container,children:[Object(h.jsx)("div",{className:V.a.User__ava,children:c?Object(h.jsx)("img",{src:k,className:V.a.loader,alt:""}):Object(h.jsx)("img",{src:a.photos.large||O.a,alt:"",className:V.a.ava})}),t&&Object(h.jsxs)("div",{className:V.a.input__wrapper,children:[Object(h.jsx)("input",{type:"file",id:"input__file",className:V.a.input__file,multiple:!0,onChange:function(e){e.target.files.length&&n(e.target.files[0])}}),Object(h.jsxs)("label",{htmlFor:"input__file",className:V.a.input__fileButton,children:[Object(h.jsx)("span",{className:V.a.input__fileIconWrapper,children:Object(h.jsx)("img",{className:V.a.input__fileIcon,src:F,width:"20"})}),Object(h.jsx)("span",{className:V.a.input__fileButtonText,children:"Download Avatar"})]})]}),t&&Object(h.jsx)("button",{className:V.a.btn,onClick:o,children:"Edit Profile"})]}),Object(h.jsxs)("div",{className:V.a.User__info,children:[Object(h.jsx)("h2",{className:V.a.User__name,children:a.fullName}),Object(h.jsxs)("ul",{className:V.a.User__descript,children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Status:"}),Object(h.jsx)("span",{children:Object(h.jsx)(L,{})})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"About me:"}),Object(h.jsx)("span",{children:a.aboutMe})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Looking for a Job:"}),Object(h.jsx)("span",{children:Object(h.jsx)("img",{src:a.lookingForAJob?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQmSURBVFiFtZffbxRVFMe/587M/v6lNWm7TUNLjAlt1ZpSMWKx5UkEhJZfYmhDTIqJJlYjaNTgg5qowT+g8GICD8aNgsRYSR8sYCiYtOkvapsQK+1DJRWhLmW3uzNzjw9ll253Z3eyab9vc+855/PdO/fu3EOwqX3jEZ+iKtsZ2EpAPQPVAELDswlNEZCaoLhDFdMqca/fTH7Ru7ljzk5dKhRwcOp8qanrxwl0GIB35fzQbCIrRwhiv4NGXSRe++25/X8UZWDbjR5nQMY+AOgYAJ9VXC4DaSNEHHShzx1Xdl1s2b9g20DrxNkSh4LvwdxsWd2GgZRcGu75nK7n+xvbrmeZXDmw70akxiF40A7crhZ1+KPxxFDTQGR7XgOtE2dLhFR+ArButeApJU1W78TMH5uuRWpyGjgycFJzEv8AYP1qw1PSTVbvGebV5r5Iek+lDcz7H/uICS+uFTylmM6BmFP2ZBg4OHW+lICjaw1P6b+kbGoeiLyQNmDq+nHkOWrFKKQ6LOeYgYWk7AYAah857U26vLeKNZDrGL4TrsXuQBU+mR3E5eitnHmCgIoSb5nQXd4dxcJzqStci9ZANQiET8MN2BIoyxknGYjHF48JBrauFvy98jq0BarTzwTCx+F6y/iEwdsEAdYRD7ROCxT8aLwbrsUrwaqMMQnG0ZnfLXMMiUrBBc59g6sUH5Y0oj1YA7Kw0RWuxe5lvxwAJDG6ZvoxFrtrWVuX7BUAAvngnaE6KCTQ5KlAe3BDlom3y2szlj0Nn+7HaB44AJiShZovYJO7DAo9/Ldu8lTAYIlvo5NgAM+6y7BHy4SbYLx1sx8T8fzwlASAqNXkqfkxDC/+kzHW4q3EoWANGt1leD1YlwV/c/qKbbgiSAoCpqwCDJY4OT+KkUSmiS2eChwJPQmFHr6OFHwyPm8LDgCaoPuCGUP5ggyW6L47iqFF6xtWMfAlA5gRDP61UODSSozlNFEsHAA0lX4RzkTsZwA5r0sZIJZZe2LOiBUNF4LYrydOiDNPd9wH8I2dJIMluueXXsecEcPXdwaLggOAz0HjvZs75lQAcCj0edLkwwD8hRJTK+EhFVGZLAouCHA6tE7gwef4zONtc8Q4YbeAwbJoOAAEnHTpSsOea2kDABBYuP0liC4WXdWmPBpFPYvKjtRz2sCpjW/oSRN7Afy5VnCHQoY7oG1a3iNk3IrPbWj7F0Q7Afy16nCV9EfdYtfVp/ZOLh/P6gu+e6JtIimpEUDfasE9GkUf0ZT6y40HelbOZRkAllZCGuZLTPgMQOHWx0KCgJCLLlW6ouVWPWLB5vTViXNVrMj3wTiEHMc0Z3NKxD4njTsdWmdqt1upoIGU2kdOe5NO38sQ3ALGMwysJyA0/HfCoQiSGlFMU3FTU+hCUni+Gty487aduv8DAlCW4nq+x+8AAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASgSURBVFiFtZdNbFVFGIafb87PbQuiVAsBraEQTEwIRNnwZ6yUgpfuCCEuRBfGROPCRBNxxQYTJcSERBcm6sKFMXEBGyv/UCFNaQOJGogYVCpogBYE+3N6es/MfC7a29zetrTUy7uae+ad73nP3Dlz5ggz1O18fl5mbYvxfiMiqxSWAI+Mdt8V6Fb4UVVPBmnaWtfe3j+TujKdobep6SknskvgJaBmhnkTEfkG2Lvg2LHLswpwbe3a6rimZg8ibwPhDMHlyoD9ibW7G9ra0hkH6GluXq6qB4AVswSPk6p2Bd6/Unfq1K/TBujZtOkZhSNA3SS1/gFaVbU1CILfxNobqUhaFQR13rkVKrIR2AYsLB/onLsxlKavL+vo+G7KAKN33j4J/A7wYWLtJ1NNZVGX8/ncvCx7FfigvE4hy25lg4MtS8+d65oQ4NratdXxnDldlE+76mkfx9sXHTrUey9wqf7evLk+dO40IkvK+5IkuUYcr2xoa7sLYIodcU3Nnglw+PpWbW3zfcO9PzUZHKCqqqrep+mB4m+BkUfNi1xk/Go/s+DOnSY5fz67bzgsu5dvKEkKmbWNy7u6OgyAE9lVBr+txmyvGFy1GxibxTiXiwU+B5Db+fw8m2XXGb/JvLfw+PF9FYHD79aYF0LntiLyWfHiQF+fmxOGi01mbUsZ/FZhcPDTSsIfP3r0WuLcV0BPsSMIw2DI+/eN8X5j2aDv6zs6hioJB2hoa0sROVjsDMMQr7rFILKqdJSqHqo0vCiBE2NtY/DOPWkUGkpNxphLDwIOYFUvlHBQ72sMMK/UlInc/h/wP30YbpoMPpLAjttPvKox5R4pFKb8/2dw588tOny4e6rxUS4XFduqCiIYoK/UFMfxY7OETzrt46S6uNj0ziHgDSJ/lHq8cxNewRWBA+r92HjnHMaYxKD607gAIvkHAQdQaCm2bZZhguCqUdWTpSaBHb3r1z9UafiVxsYqRgN478msxYgcMUGatgJJiXeur65+uZJwgJooegt4FKBQKCCAqu4VgJ7m5i9U9bUSfy+qg1O8Uu8bfj2frzNZdgmoRZV/794lCMNLyzo7ny4+hnsZOUAWVVcpuK5eHQVZ9i1QCzCUpnhV4jh+A0YPJKNH5/3T1JoVvGf+/C8VGgGstaRJQhhFZ+vPnPlhLABAYu1u4OzklbR7NtN+c/78Y8BOAK/KQH8/QRj2K2wp+sYCNLS1pSYItiHy14RqInNC57aOruR76kpjY9XN5uZ3TZZdEnh+JL8y0NcH4AJjNizv7Bzb/CYcy282Na3EmFZUn5ikfg8iBwVOWNULWNsb5XIRqovV+2Wjz3kLo6sdRjacgb4+FFyuqmrHkvb2A6UFJ/0wubF58wKsPSjGrJvuju+l4eFhhgYGMGHYHxizYWln58/lnik/zS42Ns592NqPTRjuDMKw+n7AWZaRJgnWOeIo6nDwYum0zyhAUd1r1jyLMftEZEMQhnEURRM86j3OObIso1AooN4TheEvUS73ZnG1T6VpAxR1Y926BcPev2OhRb2vR7VaVSPvvQBeRBITBFeDIDiq3n+0tLPz5kzq/gcemnohfgE+JwAAAABJRU5ErkJggg==",className:V.a.icon})})]}),a.lookingForAJob&&Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Looking for a Job Description:"}),Object(h.jsx)("span",{children:a.lookingForAJobDescription})]})]}),Object(h.jsxs)("ul",{className:V.a.contacts,children:[Object(h.jsx)("h2",{children:"My contacts:"}),Object.keys(a.contacts).map((function(e){return Object(h.jsx)(z,{contactTitle:e,contactValue:a.contacts[e]},e)}))]})]}),s&&Object(h.jsx)(S,{})]})})),z=c.a.memo((function(e){return Object(h.jsxs)("li",{children:[e.contactTitle," :",Object(h.jsx)("a",{href:e.contactValue,className:V.a.link,target:"_blank",children:e.contactValue||"--------------------"})]})})),J=c.a.memo((function(e){return Object(h.jsxs)("div",{className:B.a.Profile,children:[Object(h.jsxs)("div",{className:B.a.container,children:[Object(h.jsx)("div",{className:B.a.Profile__image,children:Object(h.jsx)("img",{src:u,alt:"image"})}),Object(h.jsx)(D,{profile:e.profile,isOwner:e.isOwner,updatePhoto:e.updatePhoto,editMode:e.editMode,onEditUserMode:e.onEditUserMode,localIsFetching:e.localIsFetching})]}),Object(h.jsx)(v,{}),Object(h.jsx)(b.a,{})]})})),M=c.a.memo((function(e){var t=Object(n.d)(A.e),s=Object(n.d)(A.b),c=Object(n.d)(l.f),i=Object(n.d)(A.a),u=Object(n.d)(A.c),b=Object(o.h)(),j=Object(n.c)(),p=r.a.onEditMode;return Object(a.useEffect)((function(){!function(){console.log(b);var t=e.match.params.userId;t||(t=c)||e.history.push("/login"),j(Object(r.d)(t)),j(Object(r.c)(t))}()}),[e.match.params.userId]),s?Object(h.jsx)(d.a,{}):t?Object(h.jsx)(J,{isOwner:!e.match.params.userId,editMode:i,profile:t,localIsFetching:u,updatePhoto:function(e){j(Object(r.e)(e))},onEditUserMode:function(){j(p())}}):Object(h.jsx)(d.a,{})}));t.default=Object(i.c)(o.i)(M)}}]);
//# sourceMappingURL=6.b74c978e.chunk.js.map