import {request} from './request.js';

export function getHomeMultidata(iid){
  return request({
    url:'api/v1/home/multidata',
    params:{
      iid
    }
  })
}

export function getHomeGoodsData(type,page){
  return request({
    url:'api/v1/home/data',
    params:{
      type,
      page
    }
  })
}

