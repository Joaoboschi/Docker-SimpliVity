(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{231:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("The Ansible node will act as the driver to automate the provisioning of the environment and it is essential that it is properly installed.")]),e._v(" "),s("ol",[e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("li",[s("p",[e._v("Configure the EPEL repository. For more information, see: "),s("a",{attrs:{href:"http://fedoraproject.org/wiki/EPEL",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://fedoraproject.org/wiki/EPEL"),s("OutboundLink")],1),e._v(". Note that "),s("code",[e._v("yum-config-manager")]),e._v(" comes with the Infrastructure Server base environment. If you did not select this environment, you will have to install the "),s("code",[e._v("yum-utils")]),e._v(" package.")]),e._v(" "),e._m(4)]),e._v(" "),e._m(5),e._v(" "),e._m(6)]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),s("p",[e._v("If you are behind a proxy, you must configure this before running the above command to register.")]),e._v(" "),e._m(11),s("p",[e._v("Verify that you don't have the issue described here: "),s("a",{attrs:{href:"https://access.redhat.com/solutions/3317671",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://access.redhat.com/solutions/3317671"),s("OutboundLink")],1),e._v(" by entering the following command.")]),e._v(" "),e._m(12),s("p",[e._v("If you have the issue, fix it with the following command")]),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),s("p",[e._v("To see how you can create a local mirror of the Red Hat repositories and how to share them, check the Red Hat documentation at "),s("a",{attrs:{href:"https://access.redhat.com/solutions/23016",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://access.redhat.com/solutions/23016"),s("OutboundLink")],1),e._v(" and at "),s("a",{attrs:{href:"https://access.redhat.com/solutions/7227",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://access.redhat.com/solutions/7227"),s("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"create-the-ansible-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-ansible-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Create the Ansible node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Create a Virtual Machine and install your preferred OS (in this example, and for the sake of simplicity, RHEL 7 will be used). The rest of the instructions assume that, if you use a different OS, you understand the possible differences in syntax for the provided commands. If you use RHEL 7, select "),t("code",[this._v("Infrastructure Server")]),this._v(" as the base environment and the "),t("code",[this._v("Guests Agents")]),this._v(" add-on during the installation.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Log in to the "),t("code",[this._v("root")]),this._v(" account and create an SSH key pair. Do not protect the key with a passphrase (unless you want to use "),t("code",[this._v("ssh-agent")]),this._v(").")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# ssh-keygen\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Configure the following yum repositories, "),t("code",[this._v("rhel-7-server-rpms")]),this._v(" and "),t("code",[this._v("rhel-7-server-extras-rpms")]),this._v(' as explained in TODO LINK. The "extras" repo can be enabled as follows:')]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# subscription-manager repos --enable=rhel-7-server-extras-rpms\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# rpm -ivh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm \n# yum-config-manager --enable rhel-7-server-extras-rpms\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Install Ansible 2.7 or higher.")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# yum install ansible\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Install the following packages which are a mandatory requirement for the playbooks to function as expected. (Update "),t("code",[this._v("pip")]),this._v(" if requested).")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# yum install python-pyvmomi python-netaddr python2-jmespath python-pip gcc python-devel openssl-devel git \n# pip install --upgrade pip \n# pip install cryptography \n# pip install pysphere \n# pip install --ignore-installed "pywinrm>=0.2.2"\n')])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configure-the-yum-repositories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-yum-repositories","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure the yum repositories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The Red Hat packages required during the deployment of the solution come from two repositories: "),t("code",[this._v("rhel-7-server-rpms")]),this._v("and "),t("code",[this._v("rhel-7-server-extras-rpms")]),this._v(". The first repository is on the Red Hat DVD but the second is not. There are two options, with both options requiring a Red Hat Network account. Logon to your VM template using SSH with the credentials you configured for the root account and then implement one of the two options below:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Option 1:")]),this._v(" Use Red Hat subscription manager to register your system. This is the easiest way and will automatically give you access to the official Red Hat repositories. Use the "),t("code",[this._v("subscription-manager register")]),this._v(" command as follows.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# subscription-manager register --auto-attach\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# subscription-manager config --server.proxy_hostname=<proxy IP> --server.proxy_port=<proxy port>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# yum repolist\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# subscription-manager repos --disable=rhel-7-server-rt-beta-rpms\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The playbooks will later automatically enable the "),t("code",[this._v("extras")]),this._v(" repository on the VMs that need it.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Option 2:")]),this._v(" Use an internal repository. Instead of pulling the packages from Red Hat, you can create copies of the required repositories on a dedicated node. You can then configure the package manager to pull the packages from the dedicated node. Your "),t("code",[this._v("/etc/yum.repos.d/redhat.repo")]),this._v(" could look as follows.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("\n[RHEL7-Server]\nname=Red Hat Enterprise Linux $releasever - $basearch\nbaseurl=http://yourserver.example.com/rhel-7-server-rpms/\nenabled=1\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release\n\n[RHEL7-Server-extras]\nname=Red Hat Enterprise Linux Extra pkg $releasever - $basearch\nbaseurl=http://yourserver.example.com/rhel-7-server-extras-rpms/\nenabled=1\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release\n\n")])])])}],!1,null,null,null);a.options.__file="create-ansible-node.md";t.default=a.exports}}]);