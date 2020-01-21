import { Sequelize } from 'sequelize'
const config = {
    host: 'rm-j6c7467p37r992u3ico.mysql.rds.aliyuncs.com', //主机名
    database: 'raindropserver', //使用的哪个数据库名
    username: 'raindropserver',//账号
    password: 'jiabin950102***',//密码
    port: 3306, //端口号，mysql默认3306
}
const sequelize =new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host:config.host,
		dialect:'mysql',
		pool:{
			max:5,
			min:0,
			idle:10000,
		},
		logging:true
	}
)
sequelize
    .authenticate()
    .then(() => {
        console.log('******Connection has been established successfully.********');
        console.log('******测试结束，即将退出！！！********');
        process.exit(); //结束进程
    })
    .catch((err: any) => {
        console.error('***************Unable to connect to the database:***********', err);
    });