# joblabxDemo
&emsp;&emsp;该项目为参加Joblabx比赛的热身题，主要功能是通过上传Excel文件，然后分析文件中的数据。



#### 2018年11月13日
1. 增加连接数据库和测试文件（测试的excel文件在webroot/testdata/目录下）。
2. 当前只能上传一个文件，分析一次，返回json原始数据。
3. 当前只能解析2003版及之前的excel表，预计明天会使系统兼容2007版后的excel表。
4. 已经初步完成前端后整合，能展示各学校，各学年的人数情况，还需要具体表格数据和相关交互设计，预计11月15号能完成。
5. 还需要登录注册功能，以便能存储到对应用户的Excel表信息。
6. 当前只能上传一次分析一次，然后结果会叠加，下一步打算根据用户需要决定要不要叠加结果。
7. 测试连接：
