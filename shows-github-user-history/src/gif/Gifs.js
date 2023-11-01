const gifSrc = [
  "https://media0.giphy.com/media/d1E1msx7Yw5Ne1Fe/giphy.webp?cid=ecf05e47z1tq7t84v3yd7rz7qwrh4gdeyte2cjuxp8ygolqa&ep=v1_gifs_search&rid=giphy.webp&ct=g",
  "https://media4.giphy.com/media/9lusxBBUsTz8Fk029b/200w.webp?cid=ecf05e473bfc6o0rtvv9ad89ns71pqj1nyuqvhj7svt4v1nq&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/N4K0mbaJtwLgQ/giphy.webp?cid=ecf05e47ayzzzzmdqwpsxf11ym27b1ni4dzhwzxtvru1e8rd&ep=v1_gifs_search&rid=giphy.webp&ct=g",
  "https://media2.giphy.com/media/eKrgVyZ7zLvJrgZNZn/giphy.webp?cid=ecf05e47z1tq7t84v3yd7rz7qwrh4gdeyte2cjuxp8ygolqa&ep=v1_gifs_search&rid=giphy.webp&ct=g",
  "https://media3.giphy.com/media/gnE4FFhtFoLKM/200w.webp?cid=ecf05e47q7tp6qrmvoub2ylw21ifgazxfw0xblffo4s4525u&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media3.giphy.com/media/d2ZcfODrNWlA5Gg0/200.webp?cid=ecf05e47q7tp6qrmvoub2ylw21ifgazxfw0xblffo4s4525u&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media1.giphy.com/media/dYPLGidt8VyE3xaucb/200.webp?cid=ecf05e47q7tp6qrmvoub2ylw21ifgazxfw0xblffo4s4525u&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media2.giphy.com/media/TiUYdWptTqn8yOk1Dp/200w.webp?cid=ecf05e47mbj3tvnxck4ysogyyhectq7697v7vt6iu61yv61l&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media4.giphy.com/media/6Q2KA5ly49368/200.webp?cid=ecf05e4735b9gm9dglzycbxku45c7u81af0xi5pk4ihlnad7&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media3.giphy.com/media/pq2pU6B2Ht3pu/200.webp?cid=ecf05e47aorcm3tq0gsobokzqznfvhgjpgualz99cjo1pmpk&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media3.giphy.com/media/qbpuswqMFcqJ2/giphy.webp?cid=ecf05e47jlpn4ggk18zuroyl16vfdczcz8vkp3j95ubkgd9j&ep=v1_gifs_search&rid=giphy.webp&ct=g",
  "https://media1.giphy.com/media/SsYt3M37MnhhGelWC3/200w.webp?cid=ecf05e47rwhnrb9jykz5ftx9xccic7fgosw6pv66a0jo3imv&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/KvSRZxtklHlEBvDQsf/200.webp?cid=ecf05e47elnkkcak16qxg7ri5ptfe4fn5yj1hrog9sf0uaex&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media1.giphy.com/media/3o7TKqcx9KP4AlsSE8/200w.webp?cid=ecf05e47lmi4bj3m77j525a9czu0q2x20pq3k0oq96z9c3u8&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/l4FGxVLseQXism41y/200w.webp?cid=ecf05e47lmi4bj3m77j525a9czu0q2x20pq3k0oq96z9c3u8&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media0.giphy.com/media/xThtayDGYcDAb1qb60/200w.webp?cid=ecf05e473vgzp0pt0hl7pjnxodme75xdts3ua6kpwecp6mvt&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/3o7TKGVqdQdyGb3aDe/200w.webp?cid=ecf05e47288kjqgmz9uiadfbian0c06xep3bntifpkkka0zp&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/1zSz5MVw4zKg0/giphy.webp?cid=ecf05e47ytcddsiaxqcb4zx5oj0zoaeqcvqgj0gk1q48lu0l&ep=v1_gifs_search&rid=giphy.webp&ct=g",
  "https://media1.giphy.com/media/wofftnAdDtx4s/200w.webp?cid=ecf05e47ytcddsiaxqcb4zx5oj0zoaeqcvqgj0gk1q48lu0l&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media1.giphy.com/media/GR4eSMqDdovZe/200.webp?cid=ecf05e47ytcddsiaxqcb4zx5oj0zoaeqcvqgj0gk1q48lu0l&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media1.giphy.com/media/QIPEV0HWAiXVm/200.webp?cid=ecf05e47ytcddsiaxqcb4zx5oj0zoaeqcvqgj0gk1q48lu0l&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media4.giphy.com/media/3o85xxUdeHWUY0G0IE/giphy.webp?cid=ecf05e47xvpcl1qq4gkvhipag4x5jh9h6rml5x5k0d1hlaft&ep=v1_gifs_search&rid=giphy.webp&ct=g",
  "https://media1.giphy.com/media/gKAsvFhqOmVI8nF4ro/200w.webp?cid=ecf05e47y2j6njdqqlyzu7wcch6wgfolfbceu9j20l8bw0ip&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media0.giphy.com/media/l0HU5HuHIMVHvCYTu/200w.webp?cid=ecf05e47y2j6njdqqlyzu7wcch6wgfolfbceu9j20l8bw0ip&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/MIhxVpykvc4og/200.webp?cid=ecf05e475yflwugs43dfam3xmsiec55kecdc13p768h16utl&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media1.giphy.com/media/i1JSXl0MfeRd6/200.webp?cid=ecf05e4753aoj230ixy5osghuhayd775hq3k8jve2iv1uz1s&ep=v1_gifs_search&rid=200.webp&ct=g",
  "https://media2.giphy.com/media/h9oAf3IWCOZgs/200w.webp?cid=ecf05e47yeya9bqion5a8ml7c39myfsrats92p8jtatpg5cx&ep=v1_gifs_search&rid=200w.webp&ct=g",
  "https://media0.giphy.com/media/EVbEdEW3kuu0o/200w.webp?cid=ecf05e47kkdm2il72h17wkc9ht0i385bcm8prqehj7hy5vae&ep=v1_gifs_search&rid=200w.webp&ct=g",
];

export default gifSrc;