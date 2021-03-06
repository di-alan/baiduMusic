// 放音乐相关的api
//业务级别的封装
//榜单列表的方法
//目的：方便维护和调用   封装之后可以对返回的数据进行统一预处理
//输出对应的榜单列表（异步操作）
import request from '../util/http'
export function getBillList(type,size=6,offset = 0) {
    const url=`/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`
    return request.get(url)
        .then(res=>{
            return {
                ...res,
                list:res.song_list
            }
        })
}



//歌手封装

export function getSingerList(tinguid) {
    const url=`/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=${tinguid}`;
    return request.get(url).then(res=>{
        return{
            ...res,
            list:res
        }
    })
}

//歌曲详情

export function getSongInfo(songId) {
     const url=`/v1/restserver/ting?method=baidu.ting.song.play&songid=${songId}`;
     return request.get(url);

}


//歌词
export function getLrc(lrcLink) {
    const url = `/data/song/lrc?lrc_link=${lrcLink}`
    return request.get(url);
}

//搜索
export function getSearch(query) {
    const url = `/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${query}`
    return request.get(url);
}

//歌手详情
export function getSinger(tinguid) {
    const url=`/v1/restserver/ting?method=baidu.ting.artist.getSongList&limits=10&tinguid=${tinguid}`;
    return request.get(url)

}