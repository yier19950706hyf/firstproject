import instance from './http.js'
import QS from 'qs';// 引入qs模块，用来序列化post类型的数据，后面会提到

/**
 * 域名
 */
const base={
    ceshi:'http://onellx.easy.echosite.cn'
}
/**
 * 接口api管理
 */
export const apiLink={
    // 登录退出
    login:{url:'/mxhy/admin/login',text:'管理员登录'},
    logout:{url:'/mxhy/admin/logout',text:'管理员退出登录'},

    // 轮播图管理
    findRotation:{url:'/viewpager/find/list',text:'查询轮播图列表'},
    addRotation:{url:'/viewpager/add',text:'添加轮播图信息'},
    updateRotation:{url:'/viewpager/update',text:'修改轮播图信息'},
    deleteRotation:{url:'/viewpager/delete/',text:'删除轮播图信息'},

    // 用户信息管理
    findUserInfo:{url:'/userinfo/find/list',text:'用户信息查询'},

    // 管理员管理
    findAdmi:{url:'/manager/find/list',text:'查询管理员信息列表'},
    addAdmi:{url:'/manager/add',text:'添加管理员信息'},
    searchAdmi:{url:'/manager/find/search',text:'关键字搜索查询管理员信息列表'},
    deleteAdmi:{url:'/manager/delete',text:'删除管理员信息'},
    verifyPwd:{url:'/manager/validation/oldpasswd',text:'修改密码验证旧密码'},
    updatePwd:{url:'/manager/update/own_passwd',text:'修改密码'},

    // 商品管理
    addGood:{url:'/mxhy-app/goods/add',text:'新增商品信息'},
    findGood:{url:'/goods/find/list',text:'查询商品信息'},
    findSimple:{url:'/goods/find/simple/list',text:'查找商品简略信息'},
    delGoodInf:{url:'/goods/delete/',text:'删除商品信息'},
    stateGood:{url:'/goods/update/state',text:'上下架商品'},
    overhead:{url:'/goods/update/overhead',text:'顶置商品'},
    findGoodId:{url:'/goods/find',text:'根据id查找商品信息'},
    searchGoodSi:{url:'/goods/find/simple/list',text:'查找商品简略信息'},

    // 商品分类管理
    addGoodType:{url:'/goodstypes/add',text:'新增分类信息'},
    updateGoodType:{url:'/goodstypes/update',text:'修改分类信息'},
    deleteId:{url:'/goodstypes/delete',text:'根据id删除分类信息'},
    findGoodType:{url:'/goodstypes/find/list',text:'查询分类信息'}

}


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * 
 */
export function get(Objurl,params){
    return new Promise((resolve,reject)=>{
        instance.get(base.ceshi+Objurl.url,{
            params:params
        }).then(res=>{
            // console.log(res)
            resolve(res.data)
        }).catch(err=>{
            console.log(err)
            reject(err.data)
        })
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * 
 */
export function post(Objurl,params){
    return new Promise((resolve,reject)=>{
        instance.post(base.ceshi+Objurl.url,QS.stringify(params))
        .then(res=>{
            // console.log(base.ceshi+Objurl.url,QS.stringify(params))
            resolve(res.data)
        })
        .catch(err=>{
            reject(err.data)
        })
    })
}