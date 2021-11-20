###[WIP]
### Generate & Configure full Feature, with one line
#### *deps: a valid swagger.json file

####CMD:

nx workspace-generator feature-generator <FeatureName> <ItemName>

OR

node node_modules/@nrwl/cli/bin/nx.js workspace-schematic feature-generator --name=store --singleItemName=product


To-Do:
- make generators names more friendly
- make them more modular
- learn more on "executors & builders"

  (https://nx.dev/l/a/executors/using-builders#using-executors--builders)

#### Example 
![Alt Text](example-4.gif)


---

```shell
node node_modules/@nrwl/cli/bin/nx.js workspace-schematic feature-generator --name=store --singleItemName=product
```
Given this test mock file:

```json
{
  "swagger": "2.0",
  "info": {
    "description": "Move your app forward with the Uber API",
    "version": "1.0.0",
    "title": "Uber API"
  },
  "host": "api.uber.com",
  "basePath": "/v1",
  "schemes": [
    "https"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/products": {
      "get": {
        "tags": [
          "Products"
        ],
        "summary": "Product Types",
        "description": "The Products endpoint returns information about the *Uber* products\noffered at a given location. The response includes the display name\nand other details about each product, and lists the products in the\nproper display order.\n",
        "parameters": [
          {
            "name": "latitude",
            "in": "query",
            "description": "Latitude component of location.",
            "required": true,
            "type": "number",
            "format": "double"
          },
          {
            "name": "longitude",
            "in": "query",
            "description": "Longitude component of location.",
            "required": true,
            "type": "number",
            "format": "double"
          }
        ],
        "responses": {
          "200": {
            "description": "An array of products",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Product"
              }
            }
          },
          "default": {
            "description": "Unexpected error",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      },
      "post": {
        "tags": [
          "Products"
        ],
        "summary": "Product Types",
        "description": "The Products endpoint returns information about the *Uber* products\noffered at a given location. The response includes the display name\nand other details about each product, and lists the products in the\nproper display order.\n",
        "parameters": [
          {
            "name": "latitude",
            "in": "query",
            "description": "Latitude component of location.",
            "required": true,
            "type": "number",
            "format": "double"
          },
          {
            "name": "longitude",
            "in": "query",
            "description": "Longitude component of location.",
            "required": true,
            "type": "number",
            "format": "double"
          }
        ],
        "responses": {
          "200": {
            "description": "An array of products",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Product"
              }
            }
          },
          "default": {
            "description": "Unexpected error",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Product": {
      "type": "object",
      "properties": {
        "product_id": {
          "type": "string",
          "description": "Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles."
        },
        "description": {
          "type": "string",
          "description": "Description of product."
        },
        "display_name": {
          "type": "string",
          "description": "Display name of product."
        },
        "capacity": {
          "type": "string",
          "description": "Capacity of product. For example, 4 people."
        },
        "image": {
          "type": "string",
          "description": "Image URL representing the product."
        }
      },
      "example": {
        "image": "image",
        "product_id": "product_id",
        "description": "description",
        "display_name": "display_name",
        "capacity": "capacity"
      }
    },
    "PriceEstimate": {
      "type": "object",
      "properties": {
        "product_id": {
          "type": "string",
          "description": "Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles"
        },
        "currency_code": {
          "type": "string",
          "description": "[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code."
        },
        "display_name": {
          "type": "string",
          "description": "Display name of product."
        },
        "estimate": {
          "type": "string",
          "description": "Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or \"Metered\" for TAXI."
        },
        "low_estimate": {
          "type": "number",
          "description": "Lower bound of the estimated price."
        },
        "high_estimate": {
          "type": "number",
          "description": "Upper bound of the estimated price."
        },
        "surge_multiplier": {
          "type": "number",
          "description": "Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier."
        }
      },
      "example": {
        "high_estimate": 6.02745618307040320615897144307382404804229736328125,
        "product_id": "product_id",
        "low_estimate": 0.80082819046101150206595775671303272247314453125,
        "surge_multiplier": 1.46581298050294517310021547018550336360931396484375,
        "estimate": "estimate",
        "display_name": "display_name",
        "currency_code": "currency_code"
      }
    },
    "Profile": {
      "type": "object",
      "properties": {
        "first_name": {
          "type": "string",
          "description": "First name of the Uber user."
        },
        "last_name": {
          "type": "string",
          "description": "Last name of the Uber user."
        },
        "email": {
          "type": "string",
          "description": "Email address of the Uber user"
        },
        "picture": {
          "type": "string",
          "description": "Image URL of the Uber user."
        },
        "role": {
          "type": "string",
          "description": "Email address of the Uber user"
        }
      },
      "example": {
        "last_name": "last_name",
        "first_name": "first_name",
        "email": "email",
        "picture": "picture"
      }
    },
    "Activity": {
      "type": "object",
      "properties": {
        "uuid": {
          "type": "string",
          "description": "Unique identifier for the activity"
        }
      },
      "example": {
        "uuid": "uuid"
      }
    },
    "Activities": {
      "type": "object",
      "properties": {
        "offset": {
          "type": "integer",
          "format": "int32",
          "description": "Position in pagination."
        },
        "limit": {
          "type": "integer",
          "format": "int32",
          "description": "Number of items to retrieve (100 max)."
        },
        "count": {
          "type": "integer",
          "format": "int32",
          "description": "Total number of items available."
        },
        "history": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Activity"
          }
        }
      },
      "example": {
        "offset": 0,
        "limit": 6,
        "count": 1,
        "history": [
          {
            "uuid": "uuid"
          },
          {
            "uuid": "uuid"
          }
        ]
      }
    },
    "Error": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "message": {
          "type": "string"
        },
        "fields": {
          "type": "string"
        }
      }
    }
  }
}

 ```
