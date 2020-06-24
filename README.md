# mslogin-saml

Simple tool to automatically get your SAML response by login Microsoft-login based application.

## Configure settings

First of all, configure it by adding the settings in a file or by using environment variables.

### Configure your settings in a file

See config/config.json in this reposotiry and update it with the values you require.

| Setting | Description |
| ------- | ----------- |
| MS_USER | Username to be used to login |
| MS_PASSWORD | Password to be used to login |
| MS_WEBAPP | Url of the application where you login to get the SAML token |

### Configure your settings in environment variables

| Environment variable | Description |
| -------------------- | ----------- |
| MS_USER | Username to be used to login |
| MS_PASSWORD | Password to be used to login |
| MS_WEBAPP | Url of the application where you login to get the SAML token |

## How to run

```
npm install
node ./src/main.js
```

As a result of the execution you will get your SAML token in the stdout

```
 SAML RESPONSE
 --------------------------------------
 xVZZb+M2EH4v0P8g6N0WdR9I3LpJWxjI1ThYFH0JKHK4ZiGJgkjB7r/vSJYcX+uk26ILGDA1nOv7ZobklaZlUWfPoGtVabA2ZVHprBde221TZYpqqbOKlqAzw7Ll/P4u86YkqxtlFFOFvWdy2YJqDY2RqrKtxe21/ZpAwlkoopSmCWMBc4XwAy+GkIEfRCQSPIo9kboQ2dYnaDRaXtvoCM21bmFRaUMrgyLiBhMST9z4hbgZ/oLkD9u6BW1kRU1vtTKmzhxH11PY0LIuYMpU6XAolevIisNmWq/qHyjT6LsauXhR1/bjw893j78uHl4DAeDnJIj8NGQBxKFLXBfSWCQpIXnoxT4PoygJ7dn331nWVcdG1qfZzIbgkh9GL8FQTg3tQl85+wY7D3W2NNS0upccyW4UB+sTLVq4zLrutbNlyxhobTtb786J+23K87FGQ1U3Wu7YW6/X07U/Vc1nxyPEdX6/v1uyFZR0IvtSMLB3Vu8bDU3AY5f6NIFUYAuELIWUe0ECIiZB6qe+YIkgAYQiDr+iCfZ5+1fVGH0s2/xPYGaQjdIHJH1xay2fusVvLS2kkNBc7rr9eLb1i2pKai4XspNIPhG9amYaWmkJlbFnrzgv3EuDJA+Y6HiIOAChJPc5j3C88oiJBBcejwdk24SPUAzYblQlZBeia4J7MCvFL+fFyiwH2kBj7xxecHmLmK0HZR6rx2YuTEeTRzwsnTtxkxcSZd4wv8/AZN0B/F+n13kjxfkShLEjnDMtscWN2lx2qrqD+hNgzeBMi7odzg9wcVSoecuRFwaI1DSS7aV0qjP7aA8OaHZ2RzR8Oeag8Ab5gIl5a1ZVd8pAiaW0+s93Du4lHlPo5xwvW9X0WHXR9QCeJTmkaRTTnKck4JxR8BmBPHCTlPIcfBG74HsxE6l/SinmhRAMbMwZLt82bwq8xZ5BzC5edCxjnR6Kn/BvrRq+o/GMqxOqT3LZ39mRecizwbLkrYHj7RMFqxt+nGjJ7X75kaOHonEnHQ+fHPXY6bjvYvTXkoV3R2b+qjHYBp8HuFV9tmcGG2iEc6B+QsO4+w6QksrimyH5cW+o/lNUwNsnvO1UNRdCFpJun03fAGWL7wF9Gdo/cTfw1agC3K8i7Fh82O/j7viKQeH41Bnvhdnf
```
