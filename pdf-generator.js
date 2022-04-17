const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const _ = require('lodash')

handlebars.registerHelper('checklength', function (v1, v2, options) {
  'use strict';
     if (v1.length<v2) {
       return options.fn(this);
    }
    return options.inverse(this);
  });

handlebars.registerHelper('checklengthMultile', function (v1, v2, options) {
    'use strict';
       if (v1.length >=v2) {
         return options.fn(this);
      }
      return options.inverse(this);
    });
async function createPDF(data) {
  var templateHtml = fs.readFileSync(
    path.join(process.cwd(), "template.hbs"),
    "utf8"
  );
  var template = handlebars.compile(templateHtml);
  var html = template(data);

  var milis = new Date();
  milis = milis.getTime();

  var pdfPath = path.join("pdf", `${data.name}-${milis}.pdf`);

  var options = {
    headerTemplate: "<p></p>",
    footerTemplate: "<p></p>",
    displayHeaderFooter: true,
    printBackground: true,
    path: pdfPath,
  };

  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: true,
  });

  var page = await browser.newPage();

  await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    waitUntil: "networkidle0",
  });

  await page.pdf(options);
  await browser.close();
}

const data = {
  error: null,
  bNo: "55647286",
  quoteId: "G119120",
  agency: "SKYLAND TRAVEL",
  agencyPhone: "6046856868",
  agencyAddress1: "202-445 WEST 6TH AVENUE",
  agencyAddress2: "",
  agencyCity: "VANCOUVER",
  agencyProvince: "BC",
  agencyPostalCode: "V5Y 1L3",
  groupName: "CODY AND ANGELA WEDDING",
  groupType: "WEDDING",
  groupContact: null,
  dest: "Cancun, Mexico",
  hotelInfo: [
    {
      pax: [
        {
          name: "CODY JONATHAN CYR",
          clientId: "CYR COD25642",
          trCode: "CUNWJVZ3",
          pnr: "STASIK",
        },
        {
          name: "ANGELA ROSE LAUER",
          clientId: "LAUEANG19380",
          trCode: "CUNWJVZ3",
          pnr: "STASIK",
        },
      ],
      type: "HOTEL",
      hotel: {
        name: "EL DORADO SEASIDE SUITES",
        code: "CUNELO",
        room: "Ocean Front Honeymoon Suite - All Inclusive",
        address1: "KM.95 CARRETERA,TULUM KANTENAH",
        address2: "RIVIERA MAYA Q.ROO",
        address3: "",
        checkIn: "20220422",
        checkOut: "20220429",
        duration: "7",
        occupancy: "2",
        hotelInfo: [],
        specialRqs: ["REQUEST KING SIZE BED"],
      },
      compNo: "1",
    },
    {
      pax: [
        {
          name: "STEPHANIE JANE LAUER",
          clientId: "LAUESTE03285",
          trCode: "CUNWJVZ3",
          pnr: "STASIK",
        },
        {
          name: "CHRISTINE ANN LAUER",
          clientId: "LAUECHR29274",
          trCode: "CUNWJVZ3",
          pnr: "STASIK",
        },
      ],
      type: "HOTEL",
      hotel: {
        name: "EL DORADO SEASIDE SUITES",
        code: "CUNELO",
        room: "Ocean Front Swim Up Suite - All Inclusive",
        address1: "KM.95 CARRETERA,TULUM KANTENAH",
        address2: "RIVIERA MAYA Q.ROO",
        address3: "",
        checkIn: "20220422",
        checkOut: "20220429",
        duration: "7",
        occupancy: "2",
        hotelInfo: [],
        specialRqs: ["REQUEST TWO DOUBLE BEDS"],
      },
      compNo: "5",
    },
    {
      pax: [
        {
          name: "DAWN DARLENE CYR",
          clientId: "CYR DAW32429",
          trCode: "CUNWJVZ3",
          pnr: "STMCTM",
        },
        {
          name: "CAROL KOZAK",
          clientId: "KOZACAR22678",
          trCode: "CUNWJVZ3",
          pnr: "CWXKLN",
        },
      ],
      type: "HOTEL",
      hotel: {
        name: "EL DORADO SEASIDE SUITES",
        code: "CUNELO",
        room: "Ocean Front Swim Up Suite - All Inclusive",
        address1: "KM.95 CARRETERA,TULUM KANTENAH",
        address2: "RIVIERA MAYA Q.ROO",
        address3: "",
        checkIn: "20220422",
        checkOut: "20220429",
        duration: "7",
        occupancy: "2",
        hotelInfo: [],
        specialRqs: ["REQUEST TWO DOUBLE BEDS"],
      },
      compNo: "6",
    },
    {
      pax: [
        {
          name: "MILES WALTER LAUER",
          clientId: "LAUEMIL28393",
          trCode: "CUNWJVZ3",
          pnr: null,
        },
        {
          name: "JUDY LYNN LAUER",
          clientId: "LAUEJUD27057",
          trCode: "CUNWJVZ3",
          pnr: "CWGTOK",
        },
      ],
      type: "HOTEL",
      hotel: {
        name: "EL DORADO SEASIDE SUITES",
        code: "CUNELO",
        room: "Ocean Front Swim Up Suite - All Inclusive",
        address1: "KM.95 CARRETERA,TULUM KANTENAH",
        address2: "RIVIERA MAYA Q.ROO",
        address3: "",
        checkIn: "20220422",
        checkOut: "20220429",
        duration: "7",
        occupancy: "2",
        hotelInfo: [],
        specialRqs: ["REQUEST KING SIZE BED"],
      },
      compNo: "7",
    },
    {
      pax: [
        {
          name: "CHANTEL RAE SCOTT",
          clientId: "SCOTCHA13805",
          trCode: "CUNWJVZ3",
          pnr: "CWGTOK",
        },
      ],
      type: "HOTEL",
      hotel: {
        name: "EL DORADO SEASIDE SUITES",
        code: "CUNELO",
        room: "Ocean Front Swim Up Suite - All Inclusive",
        address1: "KM.95 CARRETERA,TULUM KANTENAH",
        address2: "RIVIERA MAYA Q.ROO",
        address3: "",
        checkIn: "20220422",
        checkOut: "20220429",
        duration: "7",
        occupancy: "1",
        hotelInfo: [],
        specialRqs: [],
      },
      compNo: "57",
    },
    {
      pax: [
        {
          name: "CORRIN NICOLE CYR",
          clientId: "CYR COR09386",
          trCode: null,
          pnr: null,
        },
        {
          name: "JORDAN PAUL CYR",
          clientId: "CYR JOR29340",
          trCode: null,
          pnr: null,
        },
      ],
      type: "HOTEL",
      hotel: {
        name: "EL DORADO SEASIDE PALMS 18 PLUS",
        code: "10ELSP",
        room: "Premium Junior Suite - All Inclusive",
        address1: "KM.95 Carretera Tulum Kantenah",
        address2: "",
        address3: "",
        checkIn: "20220421",
        checkOut: "20220427",
        duration: "6",
        occupancy: "2",
        hotelInfo: [],
        specialRqs: ["REQUEST KING SIZE BED"],
      },
      compNo: "75",
    },
  ],
  transfersInfo: [
    {
      name: "Shared Roundtrip Transfer",
      supplier: "Best Day Travel",
      transferCode: "CUNWJVZ3",
      destination: "Cancun, Mexico",
      trRemark:
        "Upon arrival at the airport, after clearing immigration, collect your luggage and proceed to customs. After customs, proceed through the corridor, following the transportation signage until you are outside of the terminal. Please do not stop inside as your friendly Best Day Travel representative is located past the timeshare and taxi vendors and is outside the airport terminal holding a WestJet Vacations sign. Rest assured that we are expecting you and we will be waiting for you outside the terminal. Your rep will provide info about your return trip to the airport at your welcome briefing. Please consult the WestJet Vacations binder at your hotel for.",
    },
  ],
  flightsInfo: {
    pnrs: ["STASIK:ZVADFY", "STMCTM:RZNTFU", "CWXKLN:SJIAKH", "CWGTOK:XWUFVZ"],
    pnrPax: [
      "CODY JONATHAN CYR",
      "ANGELA ROSE LAUER",
      "STEPHANIE JANE LAUER",
      "CHRISTINE ANN LAUER",
      "DAWN DARLENE CYR",
      "CAROL KOZAK",
      "CHANTEL RAE SCOTT",
      "WALTER LAUER",
      "JUDY LYNN LAUER",
    ],
    pnrsInfo: [
      {
        error: null,
        pnr: "STASIK",
        paxs: [
          "CODY JONATHAN CYR",
          "ANGELA ROSE LAUER",
          "STEPHANIE JANE LAUER",
          "CHRISTINE ANN LAUER",
        ],
        segments: [
          {
            from: "CALGARY INTL AB YYC",
            to: "CANCUN CUN",
            carrier: "WS WESTJET",
            flight: "2310",
            depDateTime: "2022-04-22T09:25:00",
            arrDateTime: "2022-04-22T15:15:00",
          },
          {
            from: "CANCUN CUN",
            to: "CALGARY INTL AB YYC",
            carrier: "WS WESTJET",
            flight: "2317",
            depDateTime: "2022-04-29T17:15:00",
            arrDateTime: "2022-04-29T21:40:00",
          },
        ],
      },
      {
        error: null,
        pnr: "STMCTM",
        paxs: ["DAWN DARLENE CYR"],
        segments: [
          {
            from: "KAMLOOPS BC YKA",
            to: "CALGARY INTL AB YYC",
            carrier: "WS WESTJET",
            flight: "3540",
            depDateTime: "2022-04-22T06:05:00",
            arrDateTime: "2022-04-22T08:17:00",
          },
          {
            from: "CALGARY INTL AB YYC",
            to: "CANCUN CUN",
            carrier: "WS WESTJET",
            flight: "2310",
            depDateTime: "2022-04-22T09:25:00",
            arrDateTime: "2022-04-22T15:15:00",
          },
          {
            from: "CANCUN CUN",
            to: "CALGARY INTL AB YYC",
            carrier: "WS WESTJET",
            flight: "2317",
            depDateTime: "2022-04-29T17:15:00",
            arrDateTime: "2022-04-29T21:40:00",
          },
          {
            from: "CALGARY INTL AB YYC",
            to: "KAMLOOPS BC YKA",
            carrier: "WS WESTJET",
            flight: "3241",
            depDateTime: "2022-04-29T23:20:00",
            arrDateTime: "2022-04-29T23:41:00",
          },
        ],
      },
      {
        error: null,
        pnr: "CWXKLN",
        paxs: ["CAROL KOZAK"],
        segments: [
          {
            from: "WINNIPEG       MB YWG",
            to: "CALGARY INTL AB YYC",
            carrier: "WS WESTJET",
            flight: "0271",
            depDateTime: "2022-04-22T06:45:00",
            arrDateTime: "2022-04-22T07:57:00",
          },
          {
            from: "CALGARY INTL AB YYC",
            to: "CANCUN CUN",
            carrier: "WS WESTJET",
            flight: "2310",
            depDateTime: "2022-04-22T09:25:00",
            arrDateTime: "2022-04-22T15:15:00",
          },
          {
            from: "CANCUN CUN",
            to: "TORONTO       ON YYZ",
            carrier: "WS WESTJET",
            flight: "2581",
            depDateTime: "2022-04-29T13:55:00",
            arrDateTime: "2022-04-29T18:55:00",
          },
          {
            from: "TORONTO       ON YYZ",
            to: "WINNIPEG       MB YWG",
            carrier: "WS WESTJET",
            flight: "0535",
            depDateTime: "2022-04-29T22:30:00",
            arrDateTime: "2022-04-30T00:08:00",
          },
        ],
      },
      {
        error: null,
        pnr: "CWGTOK",
        paxs: ["CHANTEL RAE SCOTT", "WALTER LAUER", "JUDY LYNN LAUER"],
        segments: [
          {
            from: "KELOWNA BC YLW",
            to: "CALGARY INTL AB YYC",
            carrier: "WS WESTJET",
            flight: "0280",
            depDateTime: "2022-04-22T06:00:00",
            arrDateTime: "2022-04-22T08:00:00",
          },
          {
            from: "CALGARY INTL AB YYC",
            to: "CANCUN CUN",
            carrier: "WS WESTJET",
            flight: "2310",
            depDateTime: "2022-04-22T09:25:00",
            arrDateTime: "2022-04-22T15:15:00",
          },
          {
            from: "CANCUN CUN",
            to: "CALGARY INTL AB YYC",
            carrier: "WS WESTJET",
            flight: "2317",
            depDateTime: "2022-04-29T17:15:00",
            arrDateTime: "2022-04-29T21:40:00",
          },
          {
            from: "CALGARY INTL AB YYC",
            to: "KELOWNA BC YLW",
            carrier: "WS WESTJET",
            flight: "0279",
            depDateTime: "2022-04-29T23:35:00",
            arrDateTime: "2022-04-29T23:37:00",
          },
        ],
      },
    ],
    pnrErrors: [
      "MILES WALTER LAUER|name not present in any PNR",
      "CORRIN NICOLE CYR|name not present in any PNR",
      "JORDAN PAUL CYR|name not present in any PNR",
    ],
  },
};
data.hotelInfo.map((hotel) => {
  Object.assign(hotel, {b: []})
  hotel.pax.map((pax) => {
    data.flightsInfo.pnrsInfo.map((flight) => {
      if (flight.pnr == pax.pnr) {
        //console.log(flight)
        Object.assign(flight, {pnr: pax.pnr, name: pax.name})
        hotel.b.push(flight)
        //a.push(flight)
      }
    });
    data.transfersInfo.map((transfer) => {
      if (transfer.transferCode == pax.trCode) {
        Object.assign(hotel, {transfer: transfer});
      }
    });
  });
});
let flight
data.hotelInfo.map(hotel => {
  flight = _.uniqWith(hotel.b, _.isEqual)
  delete hotel["b"]
  Object.assign(hotel, {flight: flight})
})
//console.log(data.hotelInfo);
//console.log('hahahahaha',data.hotelInfo, 'hahahahaha')
// data.hotelInfo.map(item => {
//   console.log(item.a)
// })

// const hotelInfo= [
//   {
//     pax: [
//       {
//         name: "CODY JONATHAN CYR",
//         clientId: "CYR COD25642",
//         trCode: "CUNWJVZ3",
//         pnr: "STASIK",
//       },
//       {
//         name: "ANGELA ROSE LAUER",
//         clientId: "LAUEANG19380",
//         trCode: "CUNWJVZ3",
//         pnr: "STASIK",
//       },
//     ],
//     type: "HOTEL",
//     hotel: {
//       name: "EL DORADO SEASIDE SUITES",
//       code: "CUNELO",
//       room: "Ocean Front Honeymoon Suite - All Inclusive",
//       address1: "KM.95 CARRETERA,TULUM KANTENAH",
//       address2: "RIVIERA MAYA Q.ROO",
//       address3: "",
//       checkIn: "20220422",
//       checkOut: "20220429",
//       duration: "7",
//       occupancy: "2",
//       hotelInfo: [],
//       specialRqs: ["REQUEST KING SIZE BED"],
//     },
//     compNo: "1",
//   },
//   {
//     pax: [
//       {
//         name: "STEPHANIE JANE LAUER",
//         clientId: "LAUESTE03285",
//         trCode: "CUNWJVZ3",
//         pnr: "STASIK",
//       },
//       {
//         name: "CHRISTINE ANN LAUER",
//         clientId: "LAUECHR29274",
//         trCode: "CUNWJVZ3",
//         pnr: "STASIK",
//       },
//     ],
//     type: "HOTEL",
//     hotel: {
//       name: "EL DORADO SEASIDE SUITES",
//       code: "CUNELO",
//       room: "Ocean Front Swim Up Suite - All Inclusive",
//       address1: "KM.95 CARRETERA,TULUM KANTENAH",
//       address2: "RIVIERA MAYA Q.ROO",
//       address3: "",
//       checkIn: "20220422",
//       checkOut: "20220429",
//       duration: "7",
//       occupancy: "2",
//       hotelInfo: [],
//       specialRqs: ["REQUEST TWO DOUBLE BEDS"],
//     },
//     compNo: "5",
//   },
//   {
//     pax: [
//       {
//         name: "DAWN DARLENE CYR",
//         clientId: "CYR DAW32429",
//         trCode: "CUNWJVZ3",
//         pnr: "STMCTM",
//       },
//       {
//         name: "CAROL KOZAK",
//         clientId: "KOZACAR22678",
//         trCode: "CUNWJVZ3",
//         pnr: "CWXKLN",
//       },
//     ],
//     type: "HOTEL",
//     hotel: {
//       name: "EL DORADO SEASIDE SUITES",
//       code: "CUNELO",
//       room: "Ocean Front Swim Up Suite - All Inclusive",
//       address1: "KM.95 CARRETERA,TULUM KANTENAH",
//       address2: "RIVIERA MAYA Q.ROO",
//       address3: "",
//       checkIn: "20220422",
//       checkOut: "20220429",
//       duration: "7",
//       occupancy: "2",
//       hotelInfo: [],
//       specialRqs: ["REQUEST TWO DOUBLE BEDS"],
//     },
//     compNo: "6",
//   },
//   {
//     pax: [
//       {
//         name: "MILES WALTER LAUER",
//         clientId: "LAUEMIL28393",
//         trCode: "CUNWJVZ3",
//         pnr: null,
//       },
//       {
//         name: "JUDY LYNN LAUER",
//         clientId: "LAUEJUD27057",
//         trCode: "CUNWJVZ3",
//         pnr: "CWGTOK",
//       },
//     ],
//     type: "HOTEL",
//     hotel: {
//       name: "EL DORADO SEASIDE SUITES",
//       code: "CUNELO",
//       room: "Ocean Front Swim Up Suite - All Inclusive",
//       address1: "KM.95 CARRETERA,TULUM KANTENAH",
//       address2: "RIVIERA MAYA Q.ROO",
//       address3: "",
//       checkIn: "20220422",
//       checkOut: "20220429",
//       duration: "7",
//       occupancy: "2",
//       hotelInfo: [],
//       specialRqs: ["REQUEST KING SIZE BED"],
//     },
//     compNo: "7",
//   },
//   {
//     pax: [
//       {
//         name: "CHANTEL RAE SCOTT",
//         clientId: "SCOTCHA13805",
//         trCode: "CUNWJVZ3",
//         pnr: "CWGTOK",
//       },
//     ],
//     type: "HOTEL",
//     hotel: {
//       name: "EL DORADO SEASIDE SUITES",
//       code: "CUNELO",
//       room: "Ocean Front Swim Up Suite - All Inclusive",
//       address1: "KM.95 CARRETERA,TULUM KANTENAH",
//       address2: "RIVIERA MAYA Q.ROO",
//       address3: "",
//       checkIn: "20220422",
//       checkOut: "20220429",
//       duration: "7",
//       occupancy: "1",
//       hotelInfo: [],
//       specialRqs: [],
//     },
//     compNo: "57",
//   },
//   {
//     pax: [
//       {
//         name: "CORRIN NICOLE CYR",
//         clientId: "CYR COR09386",
//         trCode: null,
//         pnr: null,
//       },
//       {
//         name: "JORDAN PAUL CYR",
//         clientId: "CYR JOR29340",
//         trCode: null,
//         pnr: null,
//       },
//     ],
//     type: "HOTEL",
//     hotel: {
//       name: "EL DORADO SEASIDE PALMS 18 PLUS",
//       code: "10ELSP",
//       room: "Premium Junior Suite - All Inclusive",
//       address1: "KM.95 Carretera Tulum Kantenah",
//       address2: "",
//       address3: "",
//       checkIn: "20220421",
//       checkOut: "20220427",
//       duration: "6",
//       occupancy: "2",
//       hotelInfo: [],
//       specialRqs: ["REQUEST KING SIZE BED"],
//     },
//     compNo: "75",
//   },
// ]

// const pnrsInfo = [
//     {
//       error: null,
//       pnr: "STASIK",
//       paxs: [
//         "CODY JONATHAN CYR",
//         "ANGELA ROSE LAUER",
//         "STEPHANIE JANE LAUER",
//         "CHRISTINE ANN LAUER",
//       ],
//       segments: [
//         {
//           from: "CALGARY INTL AB YYC",
//           to: "CANCUN CUN",
//           carrier: "WS WESTJET",
//           flight: "2310",
//           depDateTime: "2022-04-22T09:25:00",
//           arrDateTime: "2022-04-22T15:15:00",
//         },
//         {
//           from: "CANCUN CUN",
//           to: "CALGARY INTL AB YYC",
//           carrier: "WS WESTJET",
//           flight: "2317",
//           depDateTime: "2022-04-29T17:15:00",
//           arrDateTime: "2022-04-29T21:40:00",
//         },
//       ],
//     },
//     {
//       error: null,
//       pnr: "STMCTM",
//       paxs: ["DAWN DARLENE CYR"],
//       segments: [
//         {
//           from: "KAMLOOPS BC YKA",
//           to: "CALGARY INTL AB YYC",
//           carrier: "WS WESTJET",
//           flight: "3540",
//           depDateTime: "2022-04-22T06:05:00",
//           arrDateTime: "2022-04-22T08:17:00",
//         },
//         {
//           from: "CALGARY INTL AB YYC",
//           to: "CANCUN CUN",
//           carrier: "WS WESTJET",
//           flight: "2310",
//           depDateTime: "2022-04-22T09:25:00",
//           arrDateTime: "2022-04-22T15:15:00",
//         },
//         {
//           from: "CANCUN CUN",
//           to: "CALGARY INTL AB YYC",
//           carrier: "WS WESTJET",
//           flight: "2317",
//           depDateTime: "2022-04-29T17:15:00",
//           arrDateTime: "2022-04-29T21:40:00",
//         },
//         {
//           from: "CALGARY INTL AB YYC",
//           to: "KAMLOOPS BC YKA",
//           carrier: "WS WESTJET",
//           flight: "3241",
//           depDateTime: "2022-04-29T23:20:00",
//           arrDateTime: "2022-04-29T23:41:00",
//         },
//       ],
//     },
//     {
//       error: null,
//       pnr: "CWXKLN",
//       paxs: ["CAROL KOZAK"],
//       segments: [
//         {
//           from: "WINNIPEG       MB YWG",
//           to: "CALGARY INTL AB YYC",
//           carrier: "WS WESTJET",
//           flight: "0271",
//           depDateTime: "2022-04-22T06:45:00",
//           arrDateTime: "2022-04-22T07:57:00",
//         },
//         {
//           from: "CALGARY INTL AB YYC",
//           to: "CANCUN CUN",
//           carrier: "WS WESTJET",
//           flight: "2310",
//           depDateTime: "2022-04-22T09:25:00",
//           arrDateTime: "2022-04-22T15:15:00",
//         },
//         {
//           from: "CANCUN CUN",
//           to: "TORONTO       ON YYZ",
//           carrier: "WS WESTJET",
//           flight: "2581",
//           depDateTime: "2022-04-29T13:55:00",
//           arrDateTime: "2022-04-29T18:55:00",
//         },
//         {
//           from: "TORONTO       ON YYZ",
//           to: "WINNIPEG       MB YWG",
//           carrier: "WS WESTJET",
//           flight: "0535",
//           depDateTime: "2022-04-29T22:30:00",
//           arrDateTime: "2022-04-30T00:08:00",
//         },
//       ],
//     },
//     {
//       error: null,
//       pnr: "CWGTOK",
//       paxs: ["CHANTEL RAE SCOTT", "WALTER LAUER", "JUDY LYNN LAUER"],
//       segments: [
//         {
//           from: "KELOWNA BC YLW",
//           to: "CALGARY INTL AB YYC",
//           carrier: "WS WESTJET",
//           flight: "0280",
//           depDateTime: "2022-04-22T06:00:00",
//           arrDateTime: "2022-04-22T08:00:00",
//         },
//         {
//           from: "CALGARY INTL AB YYC",
//           to: "CANCUN CUN",
//           carrier: "WS WESTJET",
//           flight: "2310",
//           depDateTime: "2022-04-22T09:25:00",
//           arrDateTime: "2022-04-22T15:15:00",
//         },
//         {
//           from: "CANCUN CUN",
//           to: "CALGARY INTL AB YYC",
//           carrier: "WS WESTJET",
//           flight: "2317",
//           depDateTime: "2022-04-29T17:15:00",
//           arrDateTime: "2022-04-29T21:40:00",
//         },
//         {
//           from: "CALGARY INTL AB YYC",
//           to: "KELOWNA BC YLW",
//           carrier: "WS WESTJET",
//           flight: "0279",
//           depDateTime: "2022-04-29T23:35:00",
//           arrDateTime: "2022-04-29T23:37:00",
//         },
//       ],
//     },
// ]
// let b = {thai: []}
// hotelInfo.map(hotel => {
// Object.assign(hotel, {b: []})
// })
// //console.log(hotelInfo)
// hotelInfo.map(hotel => {
// hotel.pax.map(pax => {
//   pnrsInfo.map(pnr => {
//     if(pax.pnr == pnr.pnr){
//       hotel.b.push(pnr)
//     }
//   })
// })
// })
// let r
// hotelInfo.map(hotel => {
//   r = _.uniqWith(hotel.b, _.isEqual)
//   delete hotel["b"]
//   Object.assign(hotel, {r})
//   console.log(hotel)
// })
data.hotelInfo.map(hotel => {console.log(hotel)})
createPDF(data);
