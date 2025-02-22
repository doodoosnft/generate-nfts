const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Doodoo";
const description = "";
const baseUri = "C:/Users/Administrator/Documents/GitHub/generate-nfts/build/images";
const external_link_name = "";
const collectionName = "The Doodoos";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 300, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      //Post-it notes
      { name: "Backgrounds" },
      { name: "Handles" },
      { name: "Base Colors" },
      { name: "Additives" },
      { name: "Elemental Layers" },
      { name: "Face Bases" },
      { name: "Faces" },
      { name: "Hats_Tops" }
    ],
  },
  {
    //sunglasses
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Handles" },
      { name: "Base Colors" },
      { name: "Additives" },
      { name: "Elemental Layers" },
      { name: "Sunglass Compatible Faces" },
      { name: "Sunglasses" },
      { name: "Hats_Tops" },
    ],
  },
  {
    growEditionSizeTo: 10,
    layersOrder: [
      //Sunstache faces
      { name: "Backgrounds" },
      { name: "Handles" },
      { name: "Base Colors" },
      { name: "Additives" },
      { name: "Elemental Layers" },
      { name: "Sunstache Compatible Faces" },
      { name: "Sunglasses" },
      { name: "Mustache" },
      { name: "Hats_Tops" },
    ],
  },
  {
    growEditionSizeTo: 10,
    layersOrder: [
      //'Just Faces'
      { name: "Backgrounds" },
      { name: "Handles" },
      { name: "Base Colors" },
      { name: "Additives" },
      { name: "Elemental Layers" },
      { name: "Just Faces" },
      { name: "Hats_Tops" },
    ],
  },
  {
    growEditionSizeTo: 10,
    layersOrder: [
      //elemental post-its
      { name: "Backgrounds" },
      { name: "Handles" },
      { name: "Elementals" },
      { name: "Elemental Layers" },
      { name: "Face Bases" },
      { name: "Faces" }
    ],
  },
  {
    growEditionSizeTo: 10,
    //elemental sunglasses
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Handles" },
      { name: "Elementals" },
      { name: "Elemental Layers" },
      { name: "Sunglass Compatible Faces" },
      { name: "Sunglasses" }
    ],
  },
  {
    growEditionSizeTo: 10,
    //elemental sunstache
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Handles" },
      { name: "Elementals" },
      { name: "Elemental Layers" },
      { name: "Sunstache Compatible Faces" },
      { name: "Sunglasses" },
      { name: "Mustache" },
    ],
  },
  {
    growEditionSizeTo: 10,
    //elemental regular faces
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Handles" },
      { name: "Elementals" },
      { name: "Elemental Layers" },
      { name: "Just Faces" }
    ],
  }
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  collectionName,
  external_link_name,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
