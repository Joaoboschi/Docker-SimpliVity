(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{289:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),a("p",[a("code",[e._v("rhn_orgid")]),e._v(" and "),a("code",[e._v("rhn_key")]),e._v(" are the credentials needed to subscribe the virtual machines with Red Hat Customer Portal. For more information regarding activation keys, see the following URL: "),a("a",{attrs:{href:"https://access.redhat.com/articles/1378093",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://access.redhat.com/articles/1378093"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("To encrypt the vault you need to run the following command:")]),e._v(" "),e._m(4),a("p",[e._v("You will be prompted for a password that will decrypt the vault when required. You can update the values in your vault by running:")]),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("When you use a vault, you must specify the password file every time on the command line, for example,")]),e._v(" "),e._m(8)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"protecting-sensitive-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protecting-sensitive-information","aria-hidden":"true"}},[this._v("#")]),this._v(" Protecting sensitive information")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A vault file is used to protect any sensitive variables that should not appear in clear text in your "),t("code",[this._v("group_vars/vars")]),this._v(" file. The vault file will be encrypted and will require a password to be entered before it can be read or updated.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A sample vault file is provided named "),t("code",[this._v("group_vars/vault.sample")]),this._v(" that you can use as a model for your own vault file. To create a vault, you create a new file called "),t("code",[this._v("group_vars/vault")]),this._v(" and add entries similar to:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("---\ndocker_ee_url: 'your_url_here'\nvcenter_password: 'xxxx'\nvm_password: 'xxxx'\n\nsimplivity_password: 'xxx'\nucp_password: 'zzzz'\nwin_password: 'yourpass'\nsysdig_access_key: 'enter_sysdig_access_key'\nrhn_orgid: \"YourOrgId\"\nrhn_key: \"YourActivationKey\"\n#password for the splunk universal forwarder. Must meet password complexity requirement (see splunk doc)\nsplunk_uf_password: 'YourPa$$word12'\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# ansible-vault encrypt group_vars/vault\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# ansible-vault edit group_vars/vault\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In order for Ansible to be able to read the vault, you need to specify a file where the password is stored, for instance, in a file called "),t("code",[this._v(".vault_pass")]),this._v(". Once the file is created, take the following precautions to avoid illegitimate access to this file:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[e._v("Change the permissions so only "),a("code",[e._v("root")]),e._v(" can read it using "),a("code",[e._v("# chmod 600 .vault_pass")])]),e._v(" "),a("li",[e._v("Add the file to your "),a("code",[e._v(".gitignore")]),e._v(" file if you are using a Git repository to manage your playbooks.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# ansible-playbook -i vm_hosts site.yml --vault-password-file .vault_pass\n")])])])}],!1,null,null,null);r.options.__file="edit-vault.md";t.default=r.exports}}]);