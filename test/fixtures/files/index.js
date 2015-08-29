/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

module.exports = [{
  "name": "App.js",
  "parents": [],
  "path": "/Users/joshuablack/Desktop/docgen/test/fixtures/components/App.js",
  "source": "/**\n *\n * @doc general\n */\n\nimport React from 'react';\nimport Title from './Title';\n\nexport default class App extends React.Component {\n  static defaultProps = {\n    foo: 'bar'\n  }\n\n  render() {\n    return <Title>Hello World</Title>\n  }\n}\n",
  "ast": {
    "type": "File",
    "program": {
      "type": "Program",
      "start": 0,
      "end": 239,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 18,
          "column": 0
        }
      },
      "sourceType": "module",
      "body": [{
        "type": "ImportDeclaration",
        "start": 28,
        "end": 54,
        "loc": {
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 26
          }
        },
        "specifiers": [{
          "type": "ImportDefaultSpecifier",
          "start": 35,
          "end": 40,
          "loc": {
            "start": {
              "line": 6,
              "column": 7
            },
            "end": {
              "line": 6,
              "column": 12
            }
          },
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "loc": {
              "start": {
                "line": 6,
                "column": 7
              },
              "end": {
                "line": 6,
                "column": 12
              }
            },
            "name": "React",
            "leadingComments": null
          },
          "leadingComments": null
        }],
        "importKind": "value",
        "source": {
          "type": "Literal",
          "start": 46,
          "end": 53,
          "loc": {
            "start": {
              "line": 6,
              "column": 18
            },
            "end": {
              "line": 6,
              "column": 25
            }
          },
          "value": "react",
          "rawValue": "react",
          "raw": "'react'"
        },
        "leadingComments": [{
          "type": "CommentBlock",
          "value": "*\n *\n * @doc general\n ",
          "start": 0,
          "end": 26,
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 3
            }
          },
          "range": [0, 26]
        }]
      }, {
        "type": "ImportDeclaration",
        "start": 55,
        "end": 83,
        "loc": {
          "start": {
            "line": 7,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 28
          }
        },
        "specifiers": [{
          "type": "ImportDefaultSpecifier",
          "start": 62,
          "end": 67,
          "loc": {
            "start": {
              "line": 7,
              "column": 7
            },
            "end": {
              "line": 7,
              "column": 12
            }
          },
          "local": {
            "type": "Identifier",
            "start": 62,
            "end": 67,
            "loc": {
              "start": {
                "line": 7,
                "column": 7
              },
              "end": {
                "line": 7,
                "column": 12
              }
            },
            "name": "Title"
          }
        }],
        "importKind": "value",
        "source": {
          "type": "Literal",
          "start": 73,
          "end": 82,
          "loc": {
            "start": {
              "line": 7,
              "column": 18
            },
            "end": {
              "line": 7,
              "column": 27
            }
          },
          "value": "./Title",
          "rawValue": "./Title",
          "raw": "'./Title'"
        }
      }, {
        "type": "ExportDefaultDeclaration",
        "start": 85,
        "end": 238,
        "loc": {
          "start": {
            "line": 9,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 1
          }
        },
        "declaration": {
          "type": "ClassDeclaration",
          "start": 100,
          "end": 238,
          "loc": {
            "start": {
              "line": 9,
              "column": 15
            },
            "end": {
              "line": 17,
              "column": 1
            }
          },
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "loc": {
              "start": {
                "line": 9,
                "column": 21
              },
              "end": {
                "line": 9,
                "column": 24
              }
            },
            "name": "App"
          },
          "superClass": {
            "type": "MemberExpression",
            "start": 118,
            "end": 133,
            "loc": {
              "start": {
                "line": 9,
                "column": 33
              },
              "end": {
                "line": 9,
                "column": 48
              }
            },
            "object": {
              "type": "Identifier",
              "start": 118,
              "end": 123,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 33
                },
                "end": {
                  "line": 9,
                  "column": 38
                }
              },
              "name": "React"
            },
            "property": {
              "type": "Identifier",
              "start": 124,
              "end": 133,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 39
                },
                "end": {
                  "line": 9,
                  "column": 48
                }
              },
              "name": "Component"
            },
            "computed": false
          },
          "body": {
            "type": "ClassBody",
            "start": 134,
            "end": 238,
            "loc": {
              "start": {
                "line": 9,
                "column": 49
              },
              "end": {
                "line": 17,
                "column": 1
              }
            },
            "body": [{
              "type": "ClassProperty",
              "start": 138,
              "end": 180,
              "loc": {
                "start": {
                  "line": 10,
                  "column": 2
                },
                "end": {
                  "line": 12,
                  "column": 3
                }
              },
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 145,
                "end": 157,
                "loc": {
                  "start": {
                    "line": 10,
                    "column": 9
                  },
                  "end": {
                    "line": 10,
                    "column": 21
                  }
                },
                "name": "defaultProps"
              },
              "static": true,
              "value": {
                "type": "ObjectExpression",
                "start": 160,
                "end": 180,
                "loc": {
                  "start": {
                    "line": 10,
                    "column": 24
                  },
                  "end": {
                    "line": 12,
                    "column": 3
                  }
                },
                "properties": [{
                  "type": "Property",
                  "start": 166,
                  "end": 176,
                  "loc": {
                    "start": {
                      "line": 11,
                      "column": 4
                    },
                    "end": {
                      "line": 11,
                      "column": 14
                    }
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 169,
                    "loc": {
                      "start": {
                        "line": 11,
                        "column": 4
                      },
                      "end": {
                        "line": 11,
                        "column": 7
                      }
                    },
                    "name": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 171,
                    "end": 176,
                    "loc": {
                      "start": {
                        "line": 11,
                        "column": 9
                      },
                      "end": {
                        "line": 11,
                        "column": 14
                      }
                    },
                    "value": "bar",
                    "rawValue": "bar",
                    "raw": "'bar'"
                  },
                  "kind": "init"
                }]
              }
            }, {
              "type": "MethodDefinition",
              "start": 184,
              "end": 236,
              "loc": {
                "start": {
                  "line": 14,
                  "column": 2
                },
                "end": {
                  "line": 16,
                  "column": 3
                }
              },
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "loc": {
                  "start": {
                    "line": 14,
                    "column": 2
                  },
                  "end": {
                    "line": 14,
                    "column": 8
                  }
                },
                "name": "render"
              },
              "static": false,
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 190,
                "end": 236,
                "loc": {
                  "start": {
                    "line": 14,
                    "column": 8
                  },
                  "end": {
                    "line": 16,
                    "column": 3
                  }
                },
                "id": null,
                "generator": false,
                "expression": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 193,
                  "end": 236,
                  "loc": {
                    "start": {
                      "line": 14,
                      "column": 11
                    },
                    "end": {
                      "line": 16,
                      "column": 3
                    }
                  },
                  "body": [{
                    "type": "ReturnStatement",
                    "start": 199,
                    "end": 232,
                    "loc": {
                      "start": {
                        "line": 15,
                        "column": 4
                      },
                      "end": {
                        "line": 15,
                        "column": 37
                      }
                    },
                    "argument": {
                      "type": "JSXElement",
                      "start": 206,
                      "end": 232,
                      "loc": {
                        "start": {
                          "line": 15,
                          "column": 11
                        },
                        "end": {
                          "line": 15,
                          "column": 37
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 206,
                        "end": 213,
                        "loc": {
                          "start": {
                            "line": 15,
                            "column": 11
                          },
                          "end": {
                            "line": 15,
                            "column": 18
                          }
                        },
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 207,
                          "end": 212,
                          "loc": {
                            "start": {
                              "line": 15,
                              "column": 12
                            },
                            "end": {
                              "line": 15,
                              "column": 17
                            }
                          },
                          "name": "Title"
                        },
                        "selfClosing": false
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 224,
                        "end": 232,
                        "loc": {
                          "start": {
                            "line": 15,
                            "column": 29
                          },
                          "end": {
                            "line": 15,
                            "column": 37
                          }
                        },
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 226,
                          "end": 231,
                          "loc": {
                            "start": {
                              "line": 15,
                              "column": 31
                            },
                            "end": {
                              "line": 15,
                              "column": 36
                            }
                          },
                          "name": "Title"
                        }
                      },
                      "children": [{
                        "type": "Literal",
                        "start": 213,
                        "end": 224,
                        "loc": {
                          "start": {
                            "line": 15,
                            "column": 18
                          },
                          "end": {
                            "line": 15,
                            "column": 29
                          }
                        },
                        "value": "Hello World",
                        "rawValue": null,
                        "raw": "Hello World"
                      }]
                    }
                  }]
                }
              }
            }]
          }
        }
      }]
    }
  },
  "rawDoc": "* @doc general\n",
  "docSections": ["general"]
}, {
  "name": "Title.js",
  "parents": [],
  "path": "/Users/joshuablack/Desktop/docgen/test/fixtures/components/Title.js",
  "source": "/**\n *\n * @doc general\n */\n\nimport React, { Component } from 'react';\n\nexport default class Title extends Component {\n  static propTypes = {\n    foo: React.PropTypes.string\n  }\n\n  /**\n   * Handles the on click event\n   * @param  {event} e\n   * @return {void}\n   */\n  handleOnClick(e) {}\n\n  render() {\n    return <h1>{this.props.children}</h1>\n  }\n}\n",
  "ast": {
    "type": "File",
    "program": {
      "type": "Program",
      "start": 0,
      "end": 349,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 24,
          "column": 0
        }
      },
      "sourceType": "module",
      "body": [{
        "type": "ImportDeclaration",
        "start": 28,
        "end": 69,
        "loc": {
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 41
          }
        },
        "specifiers": [{
          "type": "ImportDefaultSpecifier",
          "start": 35,
          "end": 40,
          "loc": {
            "start": {
              "line": 6,
              "column": 7
            },
            "end": {
              "line": 6,
              "column": 12
            }
          },
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "loc": {
              "start": {
                "line": 6,
                "column": 7
              },
              "end": {
                "line": 6,
                "column": 12
              }
            },
            "name": "React",
            "leadingComments": null
          },
          "leadingComments": null
        }, {
          "type": "ImportSpecifier",
          "start": 44,
          "end": 53,
          "loc": {
            "start": {
              "line": 6,
              "column": 16
            },
            "end": {
              "line": 6,
              "column": 25
            }
          },
          "imported": {
            "type": "Identifier",
            "start": 44,
            "end": 53,
            "loc": {
              "start": {
                "line": 6,
                "column": 16
              },
              "end": {
                "line": 6,
                "column": 25
              }
            },
            "name": "Component"
          },
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 53,
            "loc": {
              "start": {
                "line": 6,
                "column": 16
              },
              "end": {
                "line": 6,
                "column": 25
              }
            },
            "name": "Component"
          }
        }],
        "importKind": "value",
        "source": {
          "type": "Literal",
          "start": 61,
          "end": 68,
          "loc": {
            "start": {
              "line": 6,
              "column": 33
            },
            "end": {
              "line": 6,
              "column": 40
            }
          },
          "value": "react",
          "rawValue": "react",
          "raw": "'react'"
        },
        "leadingComments": [{
          "type": "CommentBlock",
          "value": "*\n *\n * @doc general\n ",
          "start": 0,
          "end": 26,
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 3
            }
          },
          "range": [0, 26]
        }]
      }, {
        "type": "ExportDefaultDeclaration",
        "start": 71,
        "end": 348,
        "loc": {
          "start": {
            "line": 8,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 1
          }
        },
        "declaration": {
          "type": "ClassDeclaration",
          "start": 86,
          "end": 348,
          "loc": {
            "start": {
              "line": 8,
              "column": 15
            },
            "end": {
              "line": 23,
              "column": 1
            }
          },
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 97,
            "loc": {
              "start": {
                "line": 8,
                "column": 21
              },
              "end": {
                "line": 8,
                "column": 26
              }
            },
            "name": "Title"
          },
          "superClass": {
            "type": "Identifier",
            "start": 106,
            "end": 115,
            "loc": {
              "start": {
                "line": 8,
                "column": 35
              },
              "end": {
                "line": 8,
                "column": 44
              }
            },
            "name": "Component"
          },
          "body": {
            "type": "ClassBody",
            "start": 116,
            "end": 348,
            "loc": {
              "start": {
                "line": 8,
                "column": 45
              },
              "end": {
                "line": 23,
                "column": 1
              }
            },
            "body": [{
              "type": "ClassProperty",
              "start": 120,
              "end": 176,
              "loc": {
                "start": {
                  "line": 9,
                  "column": 2
                },
                "end": {
                  "line": 11,
                  "column": 3
                }
              },
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 136,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 9
                  },
                  "end": {
                    "line": 9,
                    "column": 18
                  }
                },
                "name": "propTypes"
              },
              "static": true,
              "value": {
                "type": "ObjectExpression",
                "start": 139,
                "end": 176,
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 21
                  },
                  "end": {
                    "line": 11,
                    "column": 3
                  }
                },
                "properties": [{
                  "type": "Property",
                  "start": 145,
                  "end": 172,
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 4
                    },
                    "end": {
                      "line": 10,
                      "column": 31
                    }
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 148,
                    "loc": {
                      "start": {
                        "line": 10,
                        "column": 4
                      },
                      "end": {
                        "line": 10,
                        "column": 7
                      }
                    },
                    "name": "foo"
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 150,
                    "end": 172,
                    "loc": {
                      "start": {
                        "line": 10,
                        "column": 9
                      },
                      "end": {
                        "line": 10,
                        "column": 31
                      }
                    },
                    "object": {
                      "type": "MemberExpression",
                      "start": 150,
                      "end": 165,
                      "loc": {
                        "start": {
                          "line": 10,
                          "column": 9
                        },
                        "end": {
                          "line": 10,
                          "column": 24
                        }
                      },
                      "object": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 155,
                        "loc": {
                          "start": {
                            "line": 10,
                            "column": 9
                          },
                          "end": {
                            "line": 10,
                            "column": 14
                          }
                        },
                        "name": "React"
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 165,
                        "loc": {
                          "start": {
                            "line": 10,
                            "column": 15
                          },
                          "end": {
                            "line": 10,
                            "column": 24
                          }
                        },
                        "name": "PropTypes"
                      },
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 172,
                      "loc": {
                        "start": {
                          "line": 10,
                          "column": 25
                        },
                        "end": {
                          "line": 10,
                          "column": 31
                        }
                      },
                      "name": "string"
                    },
                    "computed": false
                  },
                  "kind": "init"
                }],
                "trailingComments": null
              },
              "trailingComments": [{
                "type": "CommentBlock",
                "value": "*\n   * Handles the on click event\n   * @param  {event} e\n   * @return {void}\n   ",
                "start": 180,
                "end": 264,
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 2
                  },
                  "end": {
                    "line": 17,
                    "column": 5
                  }
                },
                "range": [180, 264]
              }]
            }, {
              "type": "MethodDefinition",
              "start": 267,
              "end": 286,
              "loc": {
                "start": {
                  "line": 18,
                  "column": 2
                },
                "end": {
                  "line": 18,
                  "column": 21
                }
              },
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 267,
                "end": 280,
                "loc": {
                  "start": {
                    "line": 18,
                    "column": 2
                  },
                  "end": {
                    "line": 18,
                    "column": 15
                  }
                },
                "name": "handleOnClick",
                "leadingComments": null
              },
              "static": false,
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 280,
                "end": 286,
                "loc": {
                  "start": {
                    "line": 18,
                    "column": 15
                  },
                  "end": {
                    "line": 18,
                    "column": 21
                  }
                },
                "id": null,
                "generator": false,
                "expression": false,
                "async": false,
                "params": [{
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 16
                    },
                    "end": {
                      "line": 18,
                      "column": 17
                    }
                  },
                  "name": "e"
                }],
                "body": {
                  "type": "BlockStatement",
                  "start": 284,
                  "end": 286,
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 19
                    },
                    "end": {
                      "line": 18,
                      "column": 21
                    }
                  },
                  "body": []
                }
              },
              "leadingComments": [{
                "type": "CommentBlock",
                "value": "*\n   * Handles the on click event\n   * @param  {event} e\n   * @return {void}\n   ",
                "start": 180,
                "end": 264,
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 2
                  },
                  "end": {
                    "line": 17,
                    "column": 5
                  }
                },
                "range": [180, 264]
              }]
            }, {
              "type": "MethodDefinition",
              "start": 290,
              "end": 346,
              "loc": {
                "start": {
                  "line": 20,
                  "column": 2
                },
                "end": {
                  "line": 22,
                  "column": 3
                }
              },
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 290,
                "end": 296,
                "loc": {
                  "start": {
                    "line": 20,
                    "column": 2
                  },
                  "end": {
                    "line": 20,
                    "column": 8
                  }
                },
                "name": "render"
              },
              "static": false,
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 296,
                "end": 346,
                "loc": {
                  "start": {
                    "line": 20,
                    "column": 8
                  },
                  "end": {
                    "line": 22,
                    "column": 3
                  }
                },
                "id": null,
                "generator": false,
                "expression": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 299,
                  "end": 346,
                  "loc": {
                    "start": {
                      "line": 20,
                      "column": 11
                    },
                    "end": {
                      "line": 22,
                      "column": 3
                    }
                  },
                  "body": [{
                    "type": "ReturnStatement",
                    "start": 305,
                    "end": 342,
                    "loc": {
                      "start": {
                        "line": 21,
                        "column": 4
                      },
                      "end": {
                        "line": 21,
                        "column": 41
                      }
                    },
                    "argument": {
                      "type": "JSXElement",
                      "start": 312,
                      "end": 342,
                      "loc": {
                        "start": {
                          "line": 21,
                          "column": 11
                        },
                        "end": {
                          "line": 21,
                          "column": 41
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 312,
                        "end": 316,
                        "loc": {
                          "start": {
                            "line": 21,
                            "column": 11
                          },
                          "end": {
                            "line": 21,
                            "column": 15
                          }
                        },
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 313,
                          "end": 315,
                          "loc": {
                            "start": {
                              "line": 21,
                              "column": 12
                            },
                            "end": {
                              "line": 21,
                              "column": 14
                            }
                          },
                          "name": "h1"
                        },
                        "selfClosing": false
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 337,
                        "end": 342,
                        "loc": {
                          "start": {
                            "line": 21,
                            "column": 36
                          },
                          "end": {
                            "line": 21,
                            "column": 41
                          }
                        },
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 339,
                          "end": 341,
                          "loc": {
                            "start": {
                              "line": 21,
                              "column": 38
                            },
                            "end": {
                              "line": 21,
                              "column": 40
                            }
                          },
                          "name": "h1"
                        }
                      },
                      "children": [{
                        "type": "JSXExpressionContainer",
                        "start": 316,
                        "end": 337,
                        "loc": {
                          "start": {
                            "line": 21,
                            "column": 15
                          },
                          "end": {
                            "line": 21,
                            "column": 36
                          }
                        },
                        "expression": {
                          "type": "MemberExpression",
                          "start": 317,
                          "end": 336,
                          "loc": {
                            "start": {
                              "line": 21,
                              "column": 16
                            },
                            "end": {
                              "line": 21,
                              "column": 35
                            }
                          },
                          "object": {
                            "type": "MemberExpression",
                            "start": 317,
                            "end": 327,
                            "loc": {
                              "start": {
                                "line": 21,
                                "column": 16
                              },
                              "end": {
                                "line": 21,
                                "column": 26
                              }
                            },
                            "object": {
                              "type": "ThisExpression",
                              "start": 317,
                              "end": 321,
                              "loc": {
                                "start": {
                                  "line": 21,
                                  "column": 16
                                },
                                "end": {
                                  "line": 21,
                                  "column": 20
                                }
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 322,
                              "end": 327,
                              "loc": {
                                "start": {
                                  "line": 21,
                                  "column": 21
                                },
                                "end": {
                                  "line": 21,
                                  "column": 26
                                }
                              },
                              "name": "props"
                            },
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 328,
                            "end": 336,
                            "loc": {
                              "start": {
                                "line": 21,
                                "column": 27
                              },
                              "end": {
                                "line": 21,
                                "column": 35
                              }
                            },
                            "name": "children"
                          },
                          "computed": false
                        }
                      }]
                    }
                  }]
                }
              }
            }]
          }
        }
      }]
    }
  },
  "rawDoc": "* @doc general\n",
  "docSections": ["general"]
}, {
  "name": "foo.js",
  "parents": [],
  "path": "/Users/joshuablack/Desktop/docgen/test/fixtures/code/foo.js",
  "source": "/**\n *\n * @doc general\n */\n\nimport React from 'react';\nvar a = 1;\n",
  "ast": {
    "type": "File",
    "program": {
      "type": "Program",
      "start": 0,
      "end": 66,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 8,
          "column": 0
        }
      },
      "sourceType": "module",
      "body": [{
        "type": "ImportDeclaration",
        "start": 28,
        "end": 54,
        "loc": {
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 26
          }
        },
        "specifiers": [{
          "type": "ImportDefaultSpecifier",
          "start": 35,
          "end": 40,
          "loc": {
            "start": {
              "line": 6,
              "column": 7
            },
            "end": {
              "line": 6,
              "column": 12
            }
          },
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "loc": {
              "start": {
                "line": 6,
                "column": 7
              },
              "end": {
                "line": 6,
                "column": 12
              }
            },
            "name": "React",
            "leadingComments": null
          },
          "leadingComments": null
        }],
        "importKind": "value",
        "source": {
          "type": "Literal",
          "start": 46,
          "end": 53,
          "loc": {
            "start": {
              "line": 6,
              "column": 18
            },
            "end": {
              "line": 6,
              "column": 25
            }
          },
          "value": "react",
          "rawValue": "react",
          "raw": "'react'"
        },
        "leadingComments": [{
          "type": "CommentBlock",
          "value": "*\n *\n * @doc general\n ",
          "start": 0,
          "end": 26,
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 3
            }
          },
          "range": [0, 26]
        }]
      }, {
        "type": "VariableDeclaration",
        "start": 55,
        "end": 65,
        "loc": {
          "start": {
            "line": 7,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 10
          }
        },
        "declarations": [{
          "type": "VariableDeclarator",
          "start": 59,
          "end": 64,
          "loc": {
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 9
            }
          },
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "loc": {
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 5
              }
            },
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 63,
            "end": 64,
            "loc": {
              "start": {
                "line": 7,
                "column": 8
              },
              "end": {
                "line": 7,
                "column": 9
              }
            },
            "value": 1,
            "rawValue": 1,
            "raw": "1"
          }
        }],
        "kind": "var"
      }]
    }
  },
  "rawDoc": "* @doc general\n",
  "docSections": ["general"]
}];
