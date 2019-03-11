(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{295:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"kubernetes-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes configuration")]),e._v(" "),a("p",[e._v("The current playbooks support the deployment of UCP 3.1.* which deploys Kubernetes version 1.11.*. This version of the playbooks will not work with a version of UCP lower than version 3. If you wish to deploy using UCP 2.*, you will need to download an earlier release of the playbooks, which are available on the GitHub site.")]),e._v(" "),a("p",[e._v("The preceding section explains how to assign a worker node to the Kubernetes orchestrator. This sections covers specific Kubernetes configuration, including how to set the pod CIDR and how to configure Kubernetes Persistent Volumes.")]),e._v(" "),a("h3",{attrs:{id:"pod-cidr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-cidr","aria-hidden":"true"}},[e._v("#")]),e._v(" Pod CIDR")]),e._v(" "),a("p",[e._v("The variable "),a("code",[e._v("k8s_pod_cidr")]),e._v(" is specified in "),a("code",[e._v("group_vars/vars")]),e._v(" and configures a custom range of IP addresses to be used by pods. The specific range you use should be dedicated to the cluster.")]),e._v(" "),a("p",[e._v("The default value is "),a("code",[e._v("192.168.0.0/16")]),e._v(". To set an alternative value, use the variable as shown in the example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    k8s_pod_cidr: 192.168.128.0/17\n")])])]),a("h2",{attrs:{id:"kubernetes-persistent-volume-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-persistent-volume-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes Persistent Volume configuration")]),e._v(" "),a("p",[e._v("Variables related to the configuration of Kubernetes Persistent Volumes are shown in the following table.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_namespace")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The Kubernetes namespace, for example, "),a("code",[e._v("nfsstorage")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_role")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the role to create, for example, "),a("code",[e._v("nfs-provisioner-runner")]),e._v(".")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_serviceaccount")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The Kubernetes service account name to use for RBAC purposes, for example, "),a("code",[e._v("nfs-provisioner")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_name")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the provisioner, for example, "),a("code",[e._v("hpe.com/nfs")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_storage_class_name")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the storage class to create, for example, "),a("code",[e._v("nfs")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_server_ip")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("IP address (or FQDN) of your external NFS server, for example, "),a("code",[e._v("hpe2-nfs.am2.cloudra.local")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_server_share")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the NFS share where all the persistent volume data will be stored, for example, "),a("code",[e._v("/k8s")])])])])]),e._v(" "),a("h3",{attrs:{id:"related-playbooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-playbooks","aria-hidden":"true"}},[e._v("#")]),e._v(" Related playbooks")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("playbooks/k8s-nfs-provisioner.yml")]),e._v(" is used to enable a dynamic NFS provisioner which can be used to automatically create and allocate Kubernetes persistent volumes. The backend storage is provided by an NFS backend. This playbook is run from the Ansible box after configuring "),a("code",[e._v("kubectl")]),e._v(" and a UCP client bundle for the "),a("code",[e._v("admin")]),e._v(" account. For more information on using this playbook, see the section "),a("code",[e._v("Deploying the NFS provisioner for Kubernetes")]),e._v(".")])])])}],!1,null,null,null);r.options.__file="k8s-config.md";t.default=r.exports}}]);