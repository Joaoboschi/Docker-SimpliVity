(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{300:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"understanding-containers-and-related-monitoring-challenges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-containers-and-related-monitoring-challenges","aria-hidden":"true"}},[e._v("#")]),e._v(" Understanding containers and related monitoring challenges")]),e._v(" "),a("h2",{attrs:{id:"what-is-a-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-container","aria-hidden":"true"}},[e._v("#")]),e._v(" What is a container?")]),e._v(" "),a("p",[e._v("Containers are often viewed as lightweight virtual machines (VMs). While a VM has its own complete operating system sitting on top of a hypervisor, containers are sandboxes running directly on top of the host system’s kernel and, as a result, are faster and less resource intensive.")]),e._v(" "),a("p",[e._v('Developers initially adopted containers as a means to package up their code, along with all of its dependencies and configuration details, to run it anywhere - public, private or hybrid cloud. By simplifying the development environment, container technology allowed developers to run multiple versions of their own and 3rd party software on a single workstation without annoying conflicts. As a result, containers became a common, standardized building block for software development and led to the demise of the "it works on my machine" scenario.')]),e._v(" "),a("p",[e._v('Containers have been around for a long time in the Linux world, but Docker popularized them by making them easy and efficient to use and by providing a public registry of standardized container images for 3rd party software.  In the past, container technology had been perceived to be prone to security vulnerabilities, in particular to "breakout" where malicious code could escape the sandbox and access sensitive information on the host. Over the years, Docker has worked to reduce the attack surface and to limit the blast-radius should any attack succeed. As a result, running applications on containers can now significantly reduce the impact of any attack due to the underlying protections available out of the box using Docker.')]),e._v(" "),a("p",[e._v("Containers also facilitated the adoption of microservices architectures where, instead of developing single monoliths, applications are split up into a set of independent services that communicate with each other via well-defined interfaces (APIs). As result, the container has now become the standardized unit for software development for packaging, composition, deployment, scaling and re-use.  However, to deploy and maintain a reliable distributed system using all these containers, another layer of management software is required and that is role of the container orchestrator.")]),e._v(" "),a("h2",{attrs:{id:"what-is-a-container-orchestrator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-container-orchestrator","aria-hidden":"true"}},[e._v("#")]),e._v(" What is a container orchestrator?")]),e._v(" "),a("p",[e._v("A container orchestrator is a piece of software that attempts to automate the operations that would traditionally be performed by a system administrator including:")]),e._v(" "),a("ul",[a("li",[e._v("Scaling applications up and down, depending on demand")]),e._v(" "),a("li",[e._v("Load balancing across containers")]),e._v(" "),a("li",[e._v("Restarting individual containers that fail")]),e._v(" "),a("li",[e._v("Replacing and rescheduling containers when an underlying host node dies")]),e._v(" "),a("li",[e._v("Managing compute, network and storage resources")]),e._v(" "),a("li",[e._v("Optimizing resource utilization")]),e._v(" "),a("li",[e._v("Automating the roll-out and rollback of deployments")]),e._v(" "),a("li",[e._v("Allowing services to discover other services in the system")]),e._v(" "),a("li",[e._v("Monitoring and centralized logging")])]),e._v(" "),a("p",[e._v("The use of an orchestrator typically results in increased container density, leading to improved overall utilization of resources. In addition, the average lifetime of a container also decreases significantly as the orchestrator restarts, removes or relocates containers when auto-scaling or node failure occurs.")]),e._v(" "),a("h2",{attrs:{id:"what-is-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Kubernetes?")]),e._v(" "),a("p",[e._v("Kubernetes is an open-source container orchestrator project, founded by Google in 2014 and based on the internal distributed systems that support some of Google's most popular applications.")]),e._v(" "),a("p",[e._v("A number of proprietary container orchestration systems have been available, including Docker swarm and Mesosphere DC/OS. However, the DevOps community rapidly converged to make Kubernetes the de-facto standard and most commercial offerings have now pivoted to include Kubernetes as part of their offerings.  It should be noted that Kubernetes also underpins offerings from all the main cloud providers such as Amazon's Elastic Container Service for Kubernetes (EKS), Microsoft's Azure Kubernetes Service (AKS) and Google's own Kubernetes Engine (GKE). This ability to support on-premises, public cloud and hybrid deployments using a single technology and avoiding vendor lock-in, helps further copper-fasten the grip Kubernetes has on the DevOps mindset.")]),e._v(" "),a("h2",{attrs:{id:"what-is-devops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-devops","aria-hidden":"true"}},[e._v("#")]),e._v(" What is DevOps?")]),e._v(" "),a("p",[e._v('DevOps is a culture that attempts to bring speed and agility to an organization that in the past might have had monthly or quarterly release cycles, but that now requires daily or even hourly updates to remain competitive. It involves a blurring of the responsibilities between the previously disparate roles of software developer and operations engineer. After the transition from data centers to the cloud (public, private and hybrid), operations engineers are typically insulated from the underlying infrastructure, and no longer install, cable or upgrade hardware. Instead, the entire infrastructure for running applications can be provisioned using software, and the use of proven software development practices along with Infrastructure as Code (IaC) tools such as Git and Ansible, allow operations engineers to automate deployment and maintenance. At the same time, software developers have to learn how to accommodate regular "failures" in their applications where containers and nodes dynamically stop and re-start, and also to understand how their code will perform in a distributed environment and the cost implications of their architecture decisions.')]),e._v(" "),a("h2",{attrs:{id:"monitoring-why-it’s-important-and-difficult"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-why-it’s-important-and-difficult","aria-hidden":"true"}},[e._v("#")]),e._v(" Monitoring: why it’s important and difficult?")]),e._v(" "),a("p",[e._v("Monitoring has many distinct goals. Examples include: producing management dashboards, generating threshold-based alerts to prompt human or automated intervention, or enabling root cause, performance and trend analysis.")]),e._v(" "),a("p",[e._v("Orchestration and DevOps processes simplify the day-zero deployment of container-based applications and support the ongoing management of reliable, distributed systems. However, they also make monitoring more difficult. New layers of complexity are introduced that make it harder for developers and ops engineers to gain visibility into running applications and to determine how they might mitigate issues that arise.")]),e._v(" "),a("p",[e._v("Monitoring metrics can be produced by the application code itself and by any third-party software, running as distributed microservices. In addition, the infrastructure generates significant data about the containers, the servers they run on and the orchestrator itself.")]),e._v(" "),a("p",[e._v("Together with the higher density and dynamic nature of containers, traditional monitoring software can struggle with the volume and granularity of data produced and the constant churn in the systems involved. A new generation of software has evolved to monitor containers and microservices, while some legacy offerings have been adapted to handle these new requirements.")]),e._v(" "),a("p",[e._v("In my next blog, I’ll be talking about reference configurations designed to support a number of monitoring solutions—both open-source and commercial—that are geared toward cloud-native applications. I’ll also delve into deploying Docker containers-as-a-service (CaaS) in minutes on HPE Synergy.")])])}],!1,null,null,null);i.options.__file="containers-intro.md";t.default=i.exports}}]);