(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{293:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"appendix-b-using-customer-supplied-certificates-for-ucp-and-dtr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-b-using-customer-supplied-certificates-for-ucp-and-dtr","aria-hidden":"true"}},[e._v("#")]),e._v(" Appendix B: Using customer supplied certificates for UCP and DTR")]),e._v(" "),a("p",[e._v("Table 32 lists the variables used when configuring customer supplied certificates for UCP and DTR.")]),e._v(" "),a("p",[a("strong",[e._v("Table 32.")]),e._v(" Customer certs variables")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("ucp_certs_dir")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("-   If "),a("strong",[e._v("ucp_certs_dir")]),e._v(" is not defined, UCP is installed with self-signed certificates and DTR is installed with the "),a("code",[e._v("--ucp-insecure-tls")]),e._v(" switch"),a("br"),e._v("- If "),a("strong",[e._v("ucp_certs_dir")]),e._v(" is defined, this is a folder on the Ansible machine that must contain 3 files:"),a("br"),e._v("  * "),a("code",[e._v("ca.pem")]),e._v(", the root CA certificate in PEM format"),a("br"),e._v("  *   "),a("code",[e._v("cert.pem")]),e._v(", the server certificate optionally followed by intermediate CAs"),a("br"),e._v("    *   "),a("code",[e._v("key.pem")]),e._v(", the private key that comes with the "),a("code",[e._v("cert.pem")]),e._v(" certificates")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("dtr_certs_dir")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/vars")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("-   If "),a("strong",[e._v("dtr_certs_dir")]),e._v(" is not defined, DTR is installed with self-signed certificates"),a("br"),e._v("-   If "),a("strong",[e._v("dtr_certs_dir")]),e._v(" is defined, this is a folder on the Ansible machine that must contain 3 files:"),a("br"),e._v("    *   "),a("code",[e._v("ca.pem")]),e._v(", the root CA certificate in PEM format"),a("br"),e._v("    *   "),a("code",[e._v("cert.pem")]),e._v(", the server certificate optionally followed by intermediate CAs"),a("br"),e._v("    *   "),a("code",[e._v("key.pem")]),e._v(", the private key that comes with the "),a("code",[e._v("cert.pem")]),e._v(" certificates")])])])]),e._v(" "),a("p",[a("strong",[e._v("Note:")])]),e._v(" "),a("p",[e._v("The installation will fail if the "),a("code",[e._v("ca.pem")]),e._v(", "),a("code",[e._v("cert.pem")]),e._v(" and "),a("code",[e._v("key.pem")]),e._v(" files cannot be found in the folders designated by "),a("code",[e._v("dtr_certs_dir")]),e._v(" and "),a("code",[e._v("ucp_certs_dir")]),e._v(" or if they don't constitute valid certificates.")]),e._v(" "),a("p",[e._v("The certificates should specify the names of the FQDNs of the load balancer and the FQDNs of the VMs themselves. This applies to both the UCP server certificate and the DTR server certificate.")]),e._v(" "),a("h2",{attrs:{id:"generating-and-testing-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-and-testing-certificates","aria-hidden":"true"}},[e._v("#")]),e._v(" Generating and testing certificates")]),e._v(" "),a("p",[e._v("In the example described here we have a root CA named "),a("code",[e._v("Example root CA")]),e._v(" and an intermediate CA named "),a("code",[e._v("Intermediate CA valid 3 years")]),e._v(". The intermediate CA signs the server certificates for UCP and DTR.")]),e._v(" "),a("p",[e._v("Below is the start of the output displayed by running the "),a("code",[e._v("openssl x509")]),e._v(" utility against the "),a("code",[e._v("ca.pem")]),e._v(" file (the root CA certificate).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n[root@ansible ucp_certs]# openssl x509 -text -noout -in ca.pem|head -14\nCertificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0d:07:ca:ea:00:37:77:6e:25:e0:18:3e:0e:db:80:0f:11:cb:1b:3f\n    Signature Algorithm: sha256WithRSAEncryption\n        Issuer: CN=Example Root CA\n        Validity\n            Not Before: Apr 24 20:12:01 2018 GMT\n            Not After : Apr 21 20:12:30 2028 GMT\n        Subject: CN=Example Root CA\n        Subject Public Key Info:\n            Public Key Algorithm: rsaEncryption\n                Public-Key: (4096 bit)\n")])])]),a("p",[e._v("Here is an excerpt from the example "),a("code",[e._v("ca.pem")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-----BEGIN CERTIFICATE-----\nMIIFJTCCAw2gAwIBAgIUDQfK6gA3d24l4Bg+DtuADxHLGz8wDQYJKoZIhvcNAQEL\nBQAwGjEYMBYGA1UEAxMPRXhhbXBsZSBSb290IENBMB4XDTE4MDQyNDIwMTIwMVoX\n...\n...\nuXzYbCtU6Jt9B3fayAeWWswQv+jQSzuuA3re0M1x838iIZWDx93f4yLJWLJl7xsY\nbtvKBmqKDCsAqsQLFLnNj/JyYq4e9a6Xxcyn9FXNpzuEsfjfNGHn+csY+w3f987T\nMNviy376xZbyAc1CV5kgmnZzjU5bDkgT8Q==\n-----END CERTIFICATE-----\n")])])]),a("p",[e._v("The "),a("code",[e._v("cert.pem")]),e._v(" file should contain the server certificate itself, followed by your intermediate CA's certificate. The following example shows how to extract the intermediate CA certificate from "),a("code",[e._v("cert.pem")]),e._v(" and to save it to a file named "),a("code",[e._v("intca.pem")]),e._v(". Using the "),a("code",[e._v("openssl x509")]),e._v(" utility, you can display the content of the "),a("code",[e._v("intca.pem")]),e._v(" file in human readable form. This certificate was signed by the example CA above ("),a("code",[e._v("Issuer = 'Example Root CA'")]),e._v(").")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@ansible ucp_certs]# openssl x509 -text -noout -in intca.pem|head -14\nCertificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            6b:1e:0c:86:20:cf:f0:88:d2:52:0d:5d:b9:56:fa:91:87:a0:49:18\n    Signature Algorithm: sha256WithRSAEncryption\n        Issuer: CN=Example Root CA\n        Validity\n            Not Before: Apr 24 20:12:09 2018 GMT\n            Not After : Apr 23 20:12:39 2021 GMT\n        Subject: CN=Intermediate CA valid 3 years\n        Subject Public Key Info:\n            Public Key Algorithm: rsaEncryption\n                Public-Key: (4096 bit)\n")])])]),a("p",[e._v("Here is an excerpt from the "),a("code",[e._v("incta.pem")]),e._v(" file showing the example Intermediate CA certificate:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-----BEGIN CERTIFICATE-----\nMIIFcjCCA1qgAwIBAgIUax4MhiDP8IjSUg1duVb6kYegSRgwDQYJKoZIhvcNAQEL\nBQAwGjEYMBYGA1UEAxMPRXhhbXBsZSBSb290IENBMB4XDTE4MDQyNDIwMTIwOVoX\n...\n...\no2tL5nwR7ROiAr/kk9MIRzWrLNbc4cYth7jEjspU9dBqsXgsTozzWlwqI9ybZwvL\nNi1JnZandVlyQdoOaB2M/1DNFfKvwW3JeArKvDA9j95n/BWFTjoZ+YOz9pYit6T7\n1GCGu3be\n-----END CERTIFICATE-----\n")])])]),a("p",[e._v("The "),a("code",[e._v("openssl x509")]),e._v(" utility will only decrypt the first certificate found in "),a("code",[e._v("cert.pem")]),e._v(", so you don't need to extract the server certificate from "),a("code",[e._v("cert.pem")]),e._v(". In this example, the server certificate is signed by the intermediate CA above. Note the "),a("code",[e._v("Subject Alternate Names: hpe-ucp.cloudra.local")]),e._v(" is the FQDN of the UCP load balancer, and the other names are those of the UCP instances ("),a("code",[e._v("hpe-ucp01.cloudra.local")]),e._v(", "),a("code",[e._v("hpe-ucp02.clodura.local")]),e._v(", "),a("code",[e._v("hpe-ucp03.cloudra.local")]),e._v(").")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@ansible ucp_certs]# openssl x509 -text -noout -in server.pem\nCertificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            25:d9:f8:1d:9b:1d:23:f1:21:56:54:f2:43:cc:4f:0e:73:22:be:ec\n    Signature Algorithm: sha256WithRSAEncryption\n        Issuer: CN=Intermediate CA valid 3 years\n        Validity\n            Not Before: Apr 24 20:17:30 2018 GMT\n            Not After : Apr 24 20:18:00 2019 GMT\n        Subject: O=HPE, OU=CloudRA Team, CN=hpe-ucp.cloudra.local\n        Subject Public Key Info:\n            Public Key Algorithm: rsaEncryption\n                Public-Key: (2048 bit)\n                CA Issuers - URI:http://localhost:8200/v1/intca\n      ( portions removed )\n \n            X509v3 Subject Alternative Name:\n                DNS:hpe-ucp.cloudra.local, DNS:hpe-ucp01.cloudra.local, DNS:hpe-ucp02.cloudra.local, DNS:hpe-ucp03.cloudra.local\n")])])]),a("p",[e._v("The following excerpts from "),a("code",[e._v("cert.pem")]),e._v(" show the first certificate which is the server certificate itself and the second certificate which is the intermediate CA's certificate.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-----BEGIN CERTIFICATE-----\nMIIFGTCCAwGgAwIBAgIUJdn4HZsdI/EhVlTyQ8xPDnMivuwwDQYJKoZIhvcNAQEL\nBQAwKDEmMCQGA1UEAxMdSW50ZXJtZWRpYXRlIENBIHZhbGlkIDMgeWVhcnMwHhcN\n...\n...\ns0R4I3Qnc50oNISng5l7wW1d4RMMwmXQhG1H5QKAUjHfJXH4bNtIzKxw/zGTVr4Z\nllYKbEwJcgAvvfkn+w==\n-----END CERTIFICATE-----\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-----BEGIN CERTIFICATE-----\nMIIFcjCCA1qgAwIBAgIUax4MhiDP8IjSUg1duVb6kYegSRgwDQYJKoZIhvcNAQEL\nBQAwGjEYMBYGA1UEAxMPRXhhbXBsZSBSb290IENBMB4XDTE4MDQyNDIwMTIwOVoX\n...\n...\nNi1JnZandVlyQdoOaB2M/1DNFfKvwW3JeArKvDA9j95n/BWFTjoZ+YOz9pYit6T7\n1GCGu3be\n-----END CERTIFICATE-----\n")])])]),a("p",[e._v("Finally, here is an excerpt from "),a("code",[e._v("key.pem")]),e._v(", the private key that goes with the server certificate.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA5rmmb52ufE80a3cXhY2HSRZNazb7/fipXY1rZ+U5+rJv9BN5\nd/X3NTroSE8/PvoS/maGkHCnURGNqbu/G2umKN/tm/eSpDY861YnGWxj+bc0gtiU\n...\n...\nA0SGidSMk3hFX1Iaftgx4EUGbrzZO7I8M5RO64U1aMFNFyj4XghJ2mZTdNelwNBw\npr/fYulyi5lYPalQHYH3OyvNqQQ3arEbTbZp8hEyY0gxtZRXmmaoqOY=\n-----END RSA PRIVATE KEY-----\n")])])]),a("h2",{attrs:{id:"verify-your-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-your-certificates","aria-hidden":"true"}},[e._v("#")]),e._v(" Verify your certificates")]),e._v(" "),a("p",[e._v("The playbooks do not verify the validity of the certificate files you supply so you should verify them manually before you start your deployment.")]),e._v(" "),a("h3",{attrs:{id:"verify-that-the-private-and-the-server-cert-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-that-the-private-and-the-server-cert-match","aria-hidden":"true"}},[e._v("#")]),e._v(" Verify that the private and the server cert match")]),e._v(" "),a("p",[e._v("On the Ansible box, run the following commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ckcert=$(openssl x509 -noout -modulus -in cert.pem | openssl md5)\nckkey=$(openssl rsa -noout -modulus -in key.pem| openssl md5)\nif [ "$ckkey" == "$ckcert" ] ; then echo "Private key and Certificate match" ; else echo "STOP! Private Key and Certificate don\'t match" ; fi\n\n')])])]),a("h3",{attrs:{id:"verify-that-the-server-certificate-was-signed-by-the-ca"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-that-the-server-certificate-was-signed-by-the-ca","aria-hidden":"true"}},[e._v("#")]),e._v(" Verify that the server certificate was signed by the CA")]),e._v(" "),a("p",[e._v("Extract all but the first certificate from "),a("code",[e._v("cert.pem")]),e._v(" ( i.e. extract the certs for the intermediate CA authorities) into the file "),a("code",[e._v("int.pem")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sed -e '1,/-----END CERTIFICATE-----/d' cert.pem >intca.pem\n")])])]),a("p",[e._v("Combine "),a("code",[e._v("intca.pem")]),e._v(" and "),a("code",[e._v("ca.pem")]),e._v(" to form "),a("code",[e._v("cachain.pem")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat intca.pem ca.pem > cachain.pem\n")])])]),a("p",[e._v("Finally, verify that "),a("code",[e._v("cert.pem")]),e._v(" was signed by the CA or by an intermediate CA:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("openssl verify -verbose -CAfile cachain.pem  cert.pem\n")])])]),a("p",[e._v("A successful check will generate output similar to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@ansible ucp_certs]# cat intca.pem ca.pem > cachain.pem\n[root@ansible ucp_certs]# openssl verify -verbose -CAfile cachain.pem  cert.pem\ncert.pem: OK\n")])])]),a("p",[e._v("An unsuccessful check will generate output similar to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@ansible ucp_certs]# openssl verify -verbose -CAfile cachain.pem  certsignedbyanotherca.pem\ncertsignedbyanotherca.pem: O = HPE, OU = CloudRA Team, CN = hpe-ucp.cloudra.local\nerror 20 at 0 depth lookup:unable to get local issuer certificate\n")])])])])}],!1,null,null,null);r.options.__file="appendix-b.md";t.default=r.exports}}]);