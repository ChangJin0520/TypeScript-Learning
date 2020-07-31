// 单继承实例
interface Person {
  age: number
}

interface Musician extends Person {
  instrument: string
}

let drummer = <Musician>{}
drummer.age = 27
drummer.instrument = 'Drums'

console.log("年龄：" + drummer.age)
console.log("乐器：" + drummer.instrument)

// 多继承实例
interface IParent1 {
  v1: number
}

interface IParent2 {
  v2: number
}

interface Child extends IParent1, IParent2 { }

var Iobj: Child = {
  v1: 12,
  v2: 23
}

console.log(`v1 is ${Iobj.v1}`, `v2 is ${Iobj.v2}`)