let messages = [];

let id = 0;

module.exports = {
  create: (req, res) => {
    let {text, time} = req.body;
    messages.push({id, text, time});
    id++;
    res.status(200).json(messages);
  },
  read: (req, res) => {
    res.status(200).json(messages);
  },
  update: (req, res) => {
    let id = Number(req.params.id);
    let index = messages.findIndex( (val) => {
      return val.id === id;
    });
    messages[index] = {
      id: id,
      text: req.body.text || messages[index].text,
      time: req.body.time || messages[index].time
    };
    res.status(200).json(messages);
  },
  delete: (req, res) => {
    let id = Number(req.params.id);
    let index = messages.findIndex( (val) => {
      return val.id === id;
    });
    messages.splice(index, 1);
    res.status(200).json(messages);
  }
}
