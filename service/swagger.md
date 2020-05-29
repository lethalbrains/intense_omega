# Swagger Test App
This is a sample server for a pet store.

## Version: 1.0.1

### Terms of service
http://example.com/terms/

**Contact information:**  
API Support  
http://www.example.com/support  
support@example.com  

**License:** [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)


### /

#### GET
##### Description:

Use to request all customers

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | A successful response |

### /status

#### GET
##### Description:

Use to return all customers

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| customer | query | Name of our customer | No | string (string) |

