const skills = ["使用過flask,fastapi webfromwork", "pandas處理資料聚合", "自動化selenium", "資料儲存以及傳輸使用Mysql,mongodb,rabbitmq", "曾經維護過spring mvc", "開發環境mac or linux", "測試環境 docker or kubernetes", "部屬環境 aks app應用程式"];


const container = document.getElementById('skill');
const skillroot = ReactDOM.createRoot(container);
const schoolcontainer = document.getElementById('school');
const schoolroot = ReactDOM.createRoot(schoolcontainer);


const school = { 國立聯合大學能源系: 2015, 國立台中二中普通科: 2010 };

const schoolList = Object.entries(school).map(([key, value]) => {
  return /*#__PURE__*/React.createElement("li", { class: "l text-xs lg:text-base" }, key, " : ", value);
});

const skillItems = skills.map((skill) => /*#__PURE__*/
React.createElement("li", { class: "l text-xs lg:text-base" },
skill));



skillroot.render( /*#__PURE__*/React.createElement("ol", null, skillItems));
schoolroot.render( /*#__PURE__*/React.createElement("ol", null, schoolList));