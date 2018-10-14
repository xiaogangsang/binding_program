const heidelberg_models = [{
  key: "saddle_stitcher",
  name: "骑马钉",
  model_list: [{
    key: "ST100",
    name: "ST100"
  },
  {
    key: "ST300",
    name: "ST300"
  },
  {
    key: "ST350",
    name: "ST350"
  },
  {
    key: "ST400",
    name: "ST400"
  }
  ]
},
{
  key: "folding_machine",
  name: "折页机",
  model_list: [{
    key: "KD78_delivering",
    name: "KD78输纸部分"
  },
  {
    key: "KD78_folding",
    name: "KD78折页部分"
  },
    {
      key: "KD66_delivering",
      name: "KD66输纸部分"
    },
    {
      key: "KD66_folding",
      name: "KD66折页部分"
    }
  ]
},
{
  key: "others",
  name: "其它",
  model_list: [{
    key: "CD102",
    name: "印刷机CD102"
  }
  ]
}
]
module.exports = {
  heidelberg_models: heidelberg_models
}

