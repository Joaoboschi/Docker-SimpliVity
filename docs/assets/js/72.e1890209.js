(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{242:function(e,t,a){"use strict";a.r(t);var s=a(0),l=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"installing-helm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-helm","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Helm")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Install the "),a("code",[e._v("kubectl")]),e._v(" binary on your Ansible box")]),e._v(" "),a("li",[e._v("Install the UCP Client bundle for the "),a("code",[e._v("admin")]),e._v(" user")]),e._v(" "),a("li",[e._v("Confirm that you can connect to the cluster by running a test command, for example, "),a("code",[e._v("kubectl get nodes")])])]),e._v(" "),a("h2",{attrs:{id:"playbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#playbook","aria-hidden":"true"}},[e._v("#")]),e._v(" Playbook")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# cd ~/Docker-SimpliVity\n# ansible-playbook -i vm_hosts playbooks/install_helm.yml --vault-password-file .vault_pass\n")])])]),a("h2",{attrs:{id:"install-sample-charts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-sample-charts","aria-hidden":"true"}},[e._v("#")]),e._v(" Install sample charts")]),e._v(" "),a("p",[e._v("A number of sample charts are delivered with the solution, for the purposes of demonstration.")]),e._v(" "),a("h3",{attrs:{id:"alpine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alpine","aria-hidden":"true"}},[e._v("#")]),e._v(" Alpine")]),e._v(" "),a("p",[e._v("A simple chart is provided in the "),a("code",[e._v("~/Docker-SimpliVity/test/files/helm/alpine")]),e._v(" directory to run a single pod of Alpine Linux.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("templates/")]),e._v(" directory contains a very simple pod resource with a couple of parameters. The "),a("code",[e._v("values.yaml")]),e._v(" file contains the default values for the "),a("code",[e._v("alpine-pod.yaml")]),e._v(" template.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# cd ~/Docker-SimpliVity\n# helm install test/files/helm/alpine\n")])])]),a("p",[e._v("The output shows that a single pod was deployed.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME:   old-mole\nLAST DEPLOYED: Fri Feb  8 17:27:35 2019\nNAMESPACE: default\nSTATUS: DEPLOYED\n\nRESOURCES:\n==> v1/Pod\nNAME             READY  STATUS   RESTARTS  AGE\nold-mole-alpine  1/1    Running  0         0s\n")])])]),a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx")]),e._v(" "),a("p",[e._v("An example chart is provided in the "),a("code",[e._v("~/Docker-SimpliVity/test/files/helm/nginx")]),e._v(" directory to install a simple nginx server according to the following pattern:")]),e._v(" "),a("ul",[a("li",[e._v("A ConfigMap is used to store the files the server will serve. ("),a("code",[e._v("templates/configmap.yaml")]),e._v(")")]),e._v(" "),a("li",[e._v("A Deployment is used to create a Replica Set of nginx pods. ("),a("code",[e._v("templates/deployment.yaml")]),e._v(")")]),e._v(" "),a("li",[e._v("A Service is used to create a gateway to the pods running in the replica set ("),a("code",[e._v("templates/service.yaml")]),e._v(")")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("values.yaml")]),e._v(" exposes a few of the configuration options in the charts.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# cd ~/Docker-SimpliVity\n# helm install test/files/helm/nginx\n")])])]),a("p",[e._v("The output shows a service being created with a NodePort at "),a("code",[e._v("34567")]),e._v(". This value comes from the "),a("code",[e._v("values.yml")]),e._v(" file in the folder.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NAME:   worn-olm\nLAST DEPLOYED: Fri Feb  8 16:23:21 2019\nNAMESPACE: default\nSTATUS: DEPLOYED\n\nRESOURCES:\n==> v1/Deployment\nNAME            DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE\nworn-olm-nginx  1        1        1           1          14s\n\n==> v1/Pod(related)\nNAME                             READY  STATUS     RESTARTS  AGE\nworn-olm-nginx-7d648f7dfb-gg2jk  1/1    Running    0         14s\nworn-olm-nginx-vhwc7             0/1    Completed  0         14s\n\n==> v1/ConfigMap\nNAME            DATA  AGE\nworn-olm-nginx  2     14s\n\n==> v1/Service\nNAME            TYPE      CLUSTER-IP    EXTERNAL-IP  PORT(S)       AGE\nworn-olm-nginx  NodePort  10.96.30.222  <none>       80:34567/TCP  14s\n")])])]),a("p",[e._v("Helm also allows you to easily delete installed releases. List the installed releases to find the name of the release you wish to delete.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# helm list\nNAME            REVISION        UPDATED                         STATUS          CHART           APP VERSION     NAMESPACE\nworn-olm        1               Fri Feb  8 16:23:21 2019        DEPLOYED        nginx-0.1.0                     default\n")])])]),a("p",[e._v("Use the "),a("code",[e._v("helm delete")]),e._v(" command to remove the named release.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# helm delete worn-olm\nrelease "worn-olm" deleted\n')])])])])}],!1,null,null,null);l.options.__file="install-helm.md";t.default=l.exports}}]);