# yotpo-verify-pr-labels-github-action

The action source code is in check-labels.js.
If you make changes to it, you should then run the following:

 ```npm i -g @zeit/ncc```
 
Compile the source code into dist/index.js file that is run from action.yml

```ncc build check-labels.js```
