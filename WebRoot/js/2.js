/*function createTable() { 

//创建表 
var setTable = document.createElement("table"); 
//设置表的属性 
setTable.setAttribute('border', '1'); 
setTable.setAttribute('id','tableid'); 
setTable.setAttribute('cellpadding','0'); 
setTable.setAttribute('cellspacing','0'); 
setTable.setAttribute('width','100%'); 

var tbody = document.createElement("tbody"); 
//创建行 
var tr = document.createElement("tr"); 

//创建单元格 
var td1 = document.createElement("td"); 
//设置单元格的内容 
var cellContent1 = document.createTextNode("编号"); 

var td2 = document.createElement("td"); 
var cellContent2 = document.createTextNode("标题 "); 

var td3 = document.createElement("td"); 
var cellContent3 = document.createTextNode("摘要"); 

var td4 = document.createElement("td"); 
var cellContent4 = document.createTextNode("作者"); 

var td5 = document.createElement("td"); 
var cellContent5 = document.createTextNode("类别"); 

var td6 = document.createElement("td"); 
var cellContent6 = document.createTextNode("操作"); 


td1.appendChild(cellContent1); 
tr.appendChild(td1); 
tbody.appendChild(tr); 

td2.appendChild(cellContent2); 
tr.appendChild(td2); 
tbody.appendChild(tr); 

td3.appendChild(cellContent3); 
tr.appendChild(td3); 
tbody.appendChild(tr); 

td4.appendChild(cellContent4); 
tr.appendChild(td4); 
tbody.appendChild(tr); 

td5.appendChild(cellContent5); 
tr.appendChild(td5); 
tbody.appendChild(tr); 

td6.appendChild(cellContent6); 
tr.appendChild(td6); 
tbody.appendChild(tr); 


setTable.appendChild(tbody); 

//创建新增按钮 
var button = document.createElement("input"); 
button.type="button"; 
button.value="新增"; 
button.id="addBtn"; 
button.onclick=function(){ 
trdadd(); 
} 
document.getElementById("tableDiv").appendChild(button); 
document.getElementById("tableDiv").appendChild(setTable); 

//初始化全局变量table 
table = document.getElementById("tableid"); 

*************** 
form表单 
***************

//创建form表单 
var form = document.createElement("form"); 
form.setAttribute("id", "formid"); 

//创建table 
var createFormTable = document.createElement("table"); 
createFormTable.setAttribute("id", "aaid"); 

var form_table_tbody = document.createElement("tbody"); 

var form_table_tr1 = document.createElement("tr"); 
var form_table_tr2 = document.createElement("tr"); 

//单元格 
var form_table_td1 = document.createElement("td"); 
form_table_td1.setAttribute("colspan", "6"); 

var form_table_td2 = document.createElement("td"); 
form_table_td2.setAttribute("colspan", "6"); 

//单元格内容 
var form_table_td1_text = document.createTextNode("标题："); 
var form_table_td2_text = document.createTextNode("摘要："); 


//创建标题文本框 
var text1 = document.createElement("input"); 
text1.type="text"; 
text1.id="aid"; 
text1.size="30"; 

//创建摘要文本框 
var text2 = document.createElement("input"); 
text2.type="text"; 
text2.id="bid"; 
text2.size="30"; 

form_table_td1.appendChild(form_table_td1_text); 
form_table_td1.appendChild(text1); 
form_table_tr1.appendChild(form_table_td1); 
form_table_tbody.appendChild(form_table_tr1); 

form_table_td2.appendChild(form_table_td2_text); 
form_table_td2.appendChild(text2); 
form_table_tr1.appendChild(form_table_td2); 
form_table_tbody.appendChild(form_table_tr1); 


//单元格 
var form_table_td3 = document.createElement("td"); 
form_table_td3.setAttribute("colspan", "6"); 

var form_table_td4 = document.createElement("td"); 
form_table_td4.setAttribute("colspan", "6"); 

//单元格内容 
var form_table_td3_text = document.createTextNode("作者："); 
var form_table_td4_text = document.createTextNode("类型："); 

//创建作者文本框 
var text3 = document.createElement("input"); 
text3.type="text"; 
text3.id="cid"; 
text3.size="30"; 

//创建下拉框 
var select = document.createElement("select"); 
select.id="eid"; 
select.name="myname"; 

//创建下拉框option 
var option1 = document.createElement("option"); 
option1.value="1"; 

var option2 = document.createElement("option"); 
option1.value="2"; 

var option3 = document.createElement("option"); 
option1.value="3"; 

//下拉框显示的值 
var value1 = document.createTextNode("证券"); 
var value2 = document.createTextNode("体育"); 
var value3 = document.createTextNode("新闻"); 


//save按钮 
var buttonSave = document.createElement("input"); 
buttonSave.type="button"; 
buttonSave.value="保存"; 
buttonSave.id="saveBtn"; 
buttonSave.onclick=function(){ 
baocun(); 
} 

//reset按钮 
var buttonReset = document.createElement("input"); 
buttonReset.type="reset"; 
buttonReset.value="重置"; 
buttonReset.id="resetBtn"; 
buttonReset.onclick=function(){ 
chongzhi(); 
} 


option1.appendChild(value1); 
option2.appendChild(value2); 
option3.appendChild(value3); 
select.appendChild(option1); 
select.appendChild(option2); 
select.appendChild(option3); 

form_table_td3.appendChild(form_table_td3_text); 
form_table_td3.appendChild(text3); 
form_table_tr2.appendChild(form_table_td3); 
form_table_tbody.appendChild(form_table_tr2); 

form_table_td4.appendChild(form_table_td4_text); 
form_table_td4.appendChild(select); 
form_table_tr2.appendChild(form_table_td4); 
form_table_tbody.appendChild(form_table_tr2); 

createFormTable.appendChild(form_table_tbody); 
form.appendChild(createFormTable); 
form.appendChild(buttonSave); 
form.appendChild(buttonReset); 
document.getElementById("fid").appendChild(form); 
} 

// 新增 
function trdadd() { 
flag = false; 
document.getElementById("fid").style.display = "block"; //控制显示 
chongzhi(); 
document.getElementById("aid").disabled = false; //重新启用 

} 

//保存 
function baocun() { 
if (flag == false) { 

add(flag); 
document.getElementById("fid").style.display = "none"; 
} else { 

add(flag); 
document.getElementById("fid").style.display = "none"; 

} 
} 

//重置 
function chongzhi() { 
document.getElementById("formid").reset(); 
} 

//删除 
function deleteRow(input) { 
var s = input.parentNode.parentNode.rowIndex; 
document.getElementById("tableid").deleteRow(s); 
var num = document.getElementById("tableid").rows.length; 
for ( var i = 1; i < num; i += 1) { 
table.rows[i].cells[0].innerHTML = i; //把每行的每一列设为i 

} 
alert("删除成功！！"); 
} 
</script> 

</head> 
<body onload="createTable()"> 

<div id="tableDiv"></div> 
<div id="fid" style="display: none"></div> 



<script type="text/javascript"> 
//全局变量 
var table = null; 
var flag = false; 
var getselectrow; 
function getNum() { 
var haoRow = table.rows[0]; 
return haoRow.cells.length; 
} 

//添加方法 

function add(flag) { 
if (!flag) { 
// var num=getNum(); 
var row = table.insertRow(-1); //为-1时往下加（升序），为0时往上加（id降序） 
var add1 = row.insertCell(0); 
var add2 = row.insertCell(1); 
var add3 = row.insertCell(2); 
var add4 = row.insertCell(3); 
var add5 = row.insertCell(4); 
var add6 = row.insertCell(5); 

add1.innerHTML = document.getElementById("tableid").rows.length - 1;//不加-1时id从二开始；原因：标题占一个 
add2.innerHTML = document.getElementById("aid").value; 
add3.innerHTML = document.getElementById("bid").value; 
add4.innerHTML = document.getElementById("cid").value; 
var tall = document.getElementById("eid"); 
var index = tall.selectedIndex;// 当前坐标 
var option = tall.options[index]; 
add5.innerHTML = option.text; 
add6.innerHTML = "<input type='button' value='修改' onclick='updateRow(this)'> <input type='button' value='删除' onclick='deleteRow(this)'>"; 
//alert(num); 
alert("添加成功！！"); 

} else { 

var row2 = table.rows[getselectrow];//选中当前行 
//把修改后的值设置到对应的文本框中 
row2.cells[1].innerHTML = document.getElementById("aid").value; 
row2.cells[2].innerHTML = document.getElementById("bid").value; 
row2.cells[3].innerHTML = document.getElementById("cid").value; 
var pall = document.getElementById("eid"); 
var index = pall.selectedIndex; //当前坐标 
var option = pall.options[index]; 
row2.cells[4].innerHTML = option.text; 

alert("修改成功！！"); 
} 
} 

//修改 
function updateRow(input) { 
flag = true 
document.getElementById("aid").disabled = true; //不能启用 
document.getElementById("fid").style.display = "block"; 

var i = input.parentNode.parentNode.rowIndex; 

getselectrow = i; 
//得到选中行的内容放到文本框 
document.getElementById("aid").value = table.rows[i].cells[1].innerHTML; 
document.getElementById("bid").value = table.rows[i].cells[2].innerHTML; 
document.getElementById("cid").value = table.rows[i].cells[3].innerHTML; 

var select = document.getElementById("eid"); 
var index = select.selectedIndex;// 当前坐标 
var option = select.options[index]; 
option.text = table.rows[i].cells[4].innerHTML; 

} */
 function createTable(parentNode,headres,datas){
        //创建表格
        var table = document.createElement("table");
        //将表格追加到父容器中
        parentNode.appendChild(table);
        //设置table的样式
        table.cellSpacing = 0;
        table.cellPadding = 0;
        table.border = "1px";
        //创建表头
        var thead = document.createElement("thead");
        //将标题追加到table中
        table.appendChild(thead);
        //创建tr
        var tr =document.createElement("tr");
        //将tr追加到thead中
        thead.appendChild(tr);
        //设置tr的样式属性
        tr.style.height="50px";
        tr.style.backgroundColor = "lightgray";
        //遍历headers中的数据
        for(var i =0;i<headres.length;i++){
            //创建th
            var th = document.createElement("th");
            //将th追加到thead中的tr中
            tr.appendChild(th);
            //将headers的数据找到对应的th放进去  此处 用到了setInnerText()函数 调用common.js
            setInnerText(th,headres[i]);
        }
        //创建tbodt
        createTbody(parentNode,table,datas);
    };
    function createTbody(parentNodes,table,datas){
        //创建tbody
        var tbody = document.createElement("tbody");
        //将tbody追加到table中
        table.appendChild(tbody);
        //设置tbody的样式属性
        tbody.style.textAlign = "center";
        //遍历得到数据源
        for(var i=0;i<datas.length;i++){
            //获取没想数据
            var data =datas[i];
            //创建tr
            tr = document.createElement("tr");
            //将tr追加到tbody中
            tbody.appendChild(tr);
            //设置tbody中tr的属性
            tr.style.height="40px";
            //遍历对象的属性
            for(var key in data){
                //创建td
                var td = document.createElement("td");
                //追加到tbody中的tr中
                tr.appendChild(td);
                //将得到的没项属性添加到每一个td中
                setInnerText(td,data[key]);
            }
            //创建操作列
            td = document.createElement("td");
            //追加到tr中
            tr.appendChild(td);
            //给td设置a标签
            td.innerHTML = "<a href='javaScript:;'>删除</a>"
            //注册点击事件
            //找到a标签
            var link = td.children[0];
            //设置a便签的属性index为1
            link.index = i;
            //注册事件
            link.onclick = function () {
                //得到当前a标签的索引值
                var index = this.index;
                //删除该索引值的项
                datas.splice(index,1);
                //删除table
                parentNodes.removeChild(table);
                //重新创建table
                createTable(parentNodes,headers,datas);
            };
            //判断tr隔行变色
            //鼠标移动上去高亮显示
                    if(i%2==0){
                        //奇数行
                        tr.style.backgroundColor = "pink";
                    }else{
                        //偶数行
                        tr.style.backgroundColor = "#B9FFCF";
                    }
                    //注册事件高亮显示
                    var bg;
                    //鼠标经过
                    tr.onmouseover = function () {
                        bg = this.style.backgroundColor;
                        this.style.backgroundColor = "#4BE1FF";
                    };
                    //鼠标离开
                    tr.onmouseout = function(){
                        this.style.backgroundColor = bg;
                    };
        }
    };