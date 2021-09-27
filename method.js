
// 1.  Создать объект  `phone` с информацией о телефоне. Он должен содержать свойства: название бренда, модель телефона, память телефона, цвет а также свойство `power` - которое означает выключен телефон или нет (`true` / `false`). 
const phone = {
    brend: "samsung",
    model: "s10",
    memory: "128",
    color: "black",
    power: "true",
    batteryPower: 100,
    sent = [ {to: "+7919 555 23 11", time: "03:12", message: "Сплю!"},
     {to: "+7377 656 21 21", time: "23:25", message: "Д1авала?"},], 
    
    inbox = [ {from: "+7999 213 12 12", time: "20:12", message: "Спишь?"}, {from: "+2124 312 48 24", time: "11:25", message: "Все еще спишь?"}, ], 
    call: function(name){
return `Я звоню ${name}`
    },
    getBatteryPower: function(){
    return `Ваша зарядка ${this.batteryPower} %`
    },
    ison: function(){
        if (this.power === true){
            return "телефон включен"
        }else{
            return "телефон выключен"
        
        }
    },
    switch: function(){
        if(this.power === false)
         this.power =true
        else {
            this.power = false
        }
    } ,
    sentMessage: function(a, b, c){
        this.sent.push({to:"a", time: "b", message: "c"} )

    },
    clearInbox: function (){
        this.inbox.splice(0)
    },
    clearSent: function (){
        this.sent.splice(0)
},
}

