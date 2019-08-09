interface Message {
  text: string;
  sender: string;
}

const m: Message = {
  text: "hello",
  sender: "Me"
}

console.log(m);