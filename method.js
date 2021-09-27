
// 1.  Создать объект  `phone` с информацией о телефоне. Он должен содержать свойства: название бренда, модель телефона, память телефона, цвет а также свойство `power` - которое означает выключен телефон или нет (`true` / `false`). 
const phone = {
    brend: "samsung",
    model: "s10",
    memory: "128",
    color: "black",
    power: "true",
    call: function(name){
return "Я звоню"
    }
}
console.log(phone.call())
// 2. Добавить в объект метод `call()` который будет возвращать одну строку “Я звоню…”
// 3. Изменить метод `call()` таки образом, чтобы он принимал один параметр - имя того, кому звоним и возвращал строку: “Я звоню `[name]`".
// 4. Добавить в объект свойство `batteryPower` которое хранит значение кол-во зараяда.
// 5. Добавить в объект метод `getBatteryPower()` который возвращает строку: “Ваша зарядка `[значение заряда]` %”
// 6. Добавить метод `isOn` который будет возвращать строку “телефон включен”, если значение свойства `power` равно `true` и “телефон выключен” если  `false`.
// 7. Добавить метод `switch()` который будет включать и выключать телефон. Т.е. будет менять значение свойства `power`  (Если изначально значение свойства было `false` метод должен поменять его на `true` и наоборот)
// 8. Добавить свойства: исходящие сообщения и входящие сообщения, которые будут содержать в себе массив из объектов. В массиве с исходящими сообщениями объект должен содержать свойства: `to` , `time`, `message`.  А с входящими вместо свойства `to`, должно быть `from`. В итоге должно получиться примерно следующее:
    
//     sent: [
//       {to: "+7919 555 23 11", time: "03:12", message: "Сплю!"},
//       {to: "+7377 656 21 21", time: "23:25", message: "Д1авала?"},
//     ], 
//     inbox: [
//       {from: "+7999 213 12 12", time: "20:12", message: "Спишь?"},
//       {from: "+2124 312 48 24", time: "11:25", message: "Все еще спишь?"},
//     ], 
    
// 9. Создать метод `sentMessage()`, который будет добавлять новый объект в массив с отправленными сообщениями. Подумайте сколько параметров должен будет принимать этот метод.
// 10. Создать два метода `clearInbox()` и `clearSent()` которые будут удалять все входящие и все исходящие сообщения соответственно. 