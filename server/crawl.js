const axios = require("axios")
const cheerio = require("cheerio")
const getHtml = async() => {
    try {
        //예시로 naver code를 가져옴
        return await axios.get("https://finance.naver.com/item/sise.nhn?code=035420")
    }catch(e) {
        console.log(e)
    }
}
getHtml().then(html => {
    let ulList = []
    const data = cheerio.load(html.data)
    // console.log(data.html("div.rate_info"))
    // const bodylist = data("div.rate_info")
    // const todayValue = bodylist.children("div.today").children("p.no_today").children("em.no_down")
    // console.log(todayValue.find("span.blind").text())
    //주요시세 표
    const tableList = data("table.type2.type_tax").children("tbody").children("tr").children("td.num")
    const nowVal = tableList.find("#_nowVal").text().trim() //현재가
    const rate = tableList.find("#_rate").text().trim() // 등락률
    console.log(nowVal+rate)
  
})