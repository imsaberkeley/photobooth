export const generateBeat = (soundFuncs) => {
  const { hihat, drum, bass, orchestra, synth, open, snare, kitchenware1, kitchenware2, kitchenware3 } = soundFuncs;

  var C2 = 0+12*2, c2 = 1+12*2, D2 = 2+12*2, d2 = 3+12*2, E2 = 4+12*2, F2 = 5+12*2, f2 = 6+12*2, G2 = 7+12*2, g2 = 8+12*2, A2 = 9+12*2, a2 = 10+12*2, B2 = 11+12*2;
  var C3 = 0+12*3, c3 = 1+12*3, D3 = 2+12*3, d3 = 3+12*3, E3 = 4+12*3, F3 = 5+12*3, f3 = 6+12*3, G3 = 7+12*3, g3 = 8+12*3, A3 = 9+12*3, a3 = 10+12*3, B3 = 11+12*3;
  var C4 = 0+12*4, c4 = 1+12*4, D4 = 2+12*4, d4 = 3+12*4, E4 = 4+12*4, F4 = 5+12*4, f4 = 6+12*4, G4 = 7+12*4, g4 = 8+12*4, A4 = 9+12*4, a4 = 10+12*4, B4 = 11+12*4;
  var C5 = 0+12*5, c5 = 1+12*5, D5 = 2+12*5, d5 = 3+12*5, E5 = 4+12*5, F5 = 5+12*5, f5 = 6+12*5, G5 = 7+12*5, g5 = 8+12*5, A5 = 9+12*5, a5 = 10+12*5, B5 = 11+12*5;
  var C6 = 0+12*6, c6 = 1+12*6, D6 = 2+12*6, d6 = 3+12*6, E6 = 4+12*6, F6 = 5+12*6, f6 = 6+12*6, G6 = 7+12*6, g6 = 8+12*6, A6 = 9+12*6, a6 = 10+12*6, B6 = 11+12*6;
  var C7 = 0+12*7, c7 = 1+12*7, D7 = 2+12*7, d7 = 3+12*7, E7 = 4+12*7, F7 = 5+12*7, f7 = 6+12*7, G7 = 7+12*7, g7 = 8+12*7, A7 = 9+12*7, a7 = 10+12*7, B7 = 11+12*7;
  var C8 = 0+12*8, c8 = 1+12*8, D8 = 2+12*8, d8 = 3+12*8, E8 = 4+12*8, F8 = 5+12*8, f8 = 6+12*8, G8 = 7+12*8, g8 = 8+12*8, A8 = 9+12*8, a8 = 10+12*8, B8 = 11+12*8;
  var C9 = 0+12*9, c9 = 1+12*9, D9 = 2+12*9, d9 = 3+12*9, E9 = 4+12*9, F9 = 5+12*9, f9 = 6+12*9, G9 = 7+12*9, g9 = 8+12*9, A9 = 9+12*9, a9 = 10+12*9, B9 = 11+12*9;


  var notes = [
     [hihat(),drum(),        bass(C2,1/24),kitchenware1(C8,1/24), kitchenware2(), synth(D8, 1/24)]//1/16
    ,[                                     ]
    ,[                                     ]
    ,[open(),                              ]
    ,[                                     ]
    ,[drum(),                 bass(C2,1/24),kitchenware1(C8,1/24), synth(D8, 1/24)]
    ,[hihat(),drum(),snare(), bass(C2,1/24),kitchenware1(D8,1/24)]
    ,[                                     ]
    ,[                                     ]
    ,[drum(), open(),        bass(C2,1/24),kitchenware1(C7,1/24), synth(C8, 1/24) ]
    ,[                                     ]
    ,[                       bass(C2,1/24),kitchenware1(C7,1/24) ]
    ,[                                     ]//1/16
    ,[                                     ]
    ,[                                     kitchenware1(C7,1/24)]
    ,[open(),                              ]
    ,[                                     ]
    ,[drum(),                 bass(C2,1/24)]
    ,[hihat(),drum(),snare(),bass(C2,1/24),kitchenware1(D8,1/24), synth(G7, 1/24)]
    ,[                                     ]
    ,[drum(),                 bass(C2,1/24),kitchenware1(C7,1/24), synth(A7, 1/24) ]
    ,[drum(), open(),        bass(C2,1/24),kitchenware1(C7,1/24) ]
    ,[                                     ]
    ,[                                     ]

    // ,[hihat(),drum(),        bass(C3,1/24),                                                                                       ]
    // ,[hihat(),               bass(C3,1/24),                                                                                       ]
    // ,[open(),                                                                                                                     ]
    // ,[                       bass(C3,1/24)                                                                                        ]
    // ,[hihat(),drum(),snare(),bass(C3,1/24),                                                                                        ]
    // ,[hihat(),               bass(C3,1/24)                                                                                        ]
    // ,[open(),                bass(C3,1/24),                                                                                        ]
    // ,[                       bass(C3,1/24)                                                                                        ]
    

    // ,[hihat(),drum(),        bass(G2,1/24),                   ]//16/16
    // ,[hihat()                                                                                                                     ]
    // ,[open(),                bass(G2,1/24)                                                                                        ]
    // ,[                       bass(G2,1/24)                                                                                        ]
    // ,[hihat(),drum(),snare(),bass(G2,1/24)                                                                                        ]
    // ,[hihat(),               bass(G2,1/24)                                                                                        ]
    // ,[open(),                bass(G2,1/24),                                                                          ]
    // ,[                       bass(G2,1/24)                                                                                        ]
    

    // ,[hihat(),drum(),        bass(G2,1/24),                                                                          ]
    // ,[hihat(),               bass(G2,1/24)                                                                                        ]
    // ,[open(),                bass(G2,1/24),                                                                          ]
    // ,[                       bass(G2,1/24)                                                                                        ]
    // ,[hihat(),drum(),snare(),bass(G2,1/24),                                                                          ]
    // ,[hihat(),               bass(G2,1/24)                                                                                        ]
    // ,[open(),                bass(G2,1/24),                                                        ]
    // ,[                       bass(G2,1/24)                                                                                        ]
    // ,[hihat(),drum(),        bass(a2,1/24),              ]//32/16
    // ,[hihat()                                                                                                                     ]
    // ,[open(),                bass(a2,1/24)                                                                                        ]
    // ,[                       bass(a2,1/24)                                                                                        ]
    // ,[hihat(),drum(),snare(),bass(a2,1/24)                                                                                        ]
    // ,[hihat(),               bass(a2,1/24)                                                                                        ]
    // ,[open(),                bass(a2,1/24)                                                                                        ]
    // ,[                       bass(a2,1/24)                                                                                        ]
    // ,[hihat(),drum(),        bass(a2,1/24)                                                                                        ]
    // ,[hihat(),               bass(a2,1/24)                                                                                        ]
    // ,[open(),                bass(a2,1/24)                                                                                        ]
    // ,[                       bass(a2,1/24)                                                                                        ]
    // ,[hihat(),drum(),snare(),bass(a2,1/24)                                                                                        ]
    // ,[hihat(),               bass(a2,1/24)                                                                                        ]
    // ,[open(),                bass(a2,1/24)                                                                                        ]
    // ,[                       bass(a2,1/24)                                                                                        ]
    // ,[hihat(),drum(),        bass(a2,1/24)                                                                                        ]//48/16
    // ,[hihat()                                                                                                                     ]
    // ,[open(),                bass(a2,1/24)                                                                                        ]
    // ,[                       bass(a2,1/24)                                                                                        ]
    // ,[hihat(),drum(),snare(),bass(a2,1/24)                                                                                        ]
    // ,[hihat(),               bass(a2,1/24)                                                                                        ]
    // ,[open(),                bass(a2,1/24)                                                                                        ]
    // ,[                       bass(a2,1/24)                                                                                        ]
    // ,[hihat(),drum(),        bass(a2,1/24)                                                                                        ]
    // ,[hihat(),               bass(a2,1/24)                                                                                        ]
    // ,[open(),                bass(a2,1/24)                                                                                        ]
    // ,[                       bass(a2,1/24)                                                                                        ]
    // ,[hihat(),drum(),snare(),bass(a2,1/24)                                                                                        ]
    // ,[hihat(),               bass(a2,1/24)                                                                                        ]
    // ,[open(),                bass(a2,1/24)                                                                                        ]
    // ,[                       bass(a2,1/24)                                                                                        ]
    ];
  return notes;
}
