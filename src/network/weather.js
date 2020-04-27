import {request} from "./request.js"

export function getWeather(cname) {
  return request({
    params:{
      city:cname
    }
  })
}

export class TodayWea {
  constructor(data) {
    this.name = data.city
    this.nowTem = data.data[0].tem
    this.maxTem = data.data[0].tem1
    this.minTem = data.data[0].tem2
    this.wea = data.data[0].wea
    this.win = data.data[0].win[0]
    this.speed = data.data[0].win_speed
    this.air = data.data[0].air
  }
}

export class OtherWea {
  constructor(data) {
    this.maxTem = data.tem1
    this.minTem = data.tem2
    this.wea = data.wea
    this.win = data.win[0]
    this.speed = data.win_speed
  }
}
