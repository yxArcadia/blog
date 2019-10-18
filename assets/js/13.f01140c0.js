(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{466:function(a,r,t){"use strict";t.r(r);var e=t(19),i=Object(e.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"spring-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-概述","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring 概述")]),a._v(" "),t("h2",{attrs:{id:"_1-什么是spring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是spring","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.什么是spring?")]),a._v(" "),t("p",[a._v("Spring 是个java企业级应用的开源开发框架。Spring主要用来开发Java应用，但是有些扩展是针对构建J2EE平台的web应用。Spring 框架目标是简化Java企业级应用开发，并通过POJO为基础的编程模型促进良好的编程习惯。")]),a._v(" "),t("h2",{attrs:{id:"_2-使用spring框架的好处是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用spring框架的好处是什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 使用Spring框架的好处是什么？")]),a._v(" "),t("ul",[t("li",[a._v("轻量：Spring 是轻量的，基本的版本大约2MB。")]),a._v(" "),t("li",[a._v("控制反转：Spring通过控制反转实现了松散耦合，对象们给出它们的依赖，而不是创建或查找依赖的对象们。")]),a._v(" "),t("li",[a._v("面向切面的编程(AOP)：Spring支持面向切面的编程，并且把应用业务逻辑和系统服务分开。")]),a._v(" "),t("li",[a._v("容器：Spring 包含并管理应用中对象的生命周期和配置。")]),a._v(" "),t("li",[a._v("MVC框架：Spring的WEB框架是个精心设计的框架，是Web框架的一个很好的替代品。")]),a._v(" "),t("li",[a._v("事务管理：Spring 提供一个持续的事务管理接口，可以扩展到上至本地事务下至全局事务（JTA）。")]),a._v(" "),t("li",[a._v("异常处理：Spring 提供方便的API把具体技术相关的异常（比如由JDBC，Hibernate or JDO抛出的）转化为一致的unchecked 异常。")])]),a._v(" "),t("h2",{attrs:{id:"_3-spring由哪些模块组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-spring由哪些模块组成","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. Spring由哪些模块组成?")]),a._v(" "),t("p",[a._v("以下是Spring 框架的基本模块：")]),a._v(" "),t("ul",[t("li",[a._v("Core module")]),a._v(" "),t("li",[a._v("Bean module")]),a._v(" "),t("li",[a._v("Context module")]),a._v(" "),t("li",[a._v("Expression Language module")]),a._v(" "),t("li",[a._v("JDBC module")]),a._v(" "),t("li",[a._v("ORM module")]),a._v(" "),t("li",[a._v("OXM module")]),a._v(" "),t("li",[a._v("Java Messaging Service(JMS) module")]),a._v(" "),t("li",[a._v("Transaction module")]),a._v(" "),t("li",[a._v("Web module")]),a._v(" "),t("li",[a._v("Web-Servlet module")]),a._v(" "),t("li",[a._v("Web-Struts module")]),a._v(" "),t("li",[a._v("Web-Portlet module")])]),a._v(" "),t("h2",{attrs:{id:"_4-核心容器（应用上下文-模块。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-核心容器（应用上下文-模块。","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 核心容器（应用上下文) 模块。")]),a._v(" "),t("p",[a._v("这是基本的Spring模块，提供spring 框架的基础功能，BeanFactory 是 任何以spring为基础的应用的核心。Spring 框架建立在此模块之上，它使Spring成为一个容器。")]),a._v(" "),t("h2",{attrs:{id:"_5-beanfactory-–-beanfactory-实现举例。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-beanfactory-–-beanfactory-实现举例。","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. BeanFactory – BeanFactory 实现举例。")]),a._v(" "),t("p",[a._v("Bean 工厂是工厂模式的一个实现，提供了控制反转功能，用来把应用的配置和依赖从正真的应用代码中分离。")]),a._v(" "),t("p",[a._v("最常用的BeanFactory 实现是XmlBeanFactory 类。")]),a._v(" "),t("h2",{attrs:{id:"_6-xmlbeanfactory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-xmlbeanfactory","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. XMLBeanFactory")]),a._v(" "),t("p",[a._v("最常用的就是org.springframework.beans.factory.xml.XmlBeanFactory ，它根据XML文件中的定义加载beans。该容器从XML 文件读取配置元数据并用它去创建一个完全配置的系统或应用。")]),a._v(" "),t("h2",{attrs:{id:"_7-解释aop模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-解释aop模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 7. 解释AOP模块")]),a._v(" "),t("p",[a._v("AOP模块用于发给我们的Spring应用做面向切面的开发， 很多支持由AOP联盟提供，这样就确保了Spring和其他AOP框架的共通性。这个模块将元数据编程引入Spring。")]),a._v(" "),t("h2",{attrs:{id:"_8-解释jdbc抽象和dao模块。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-解释jdbc抽象和dao模块。","aria-hidden":"true"}},[a._v("#")]),a._v(" 8. 解释JDBC抽象和DAO模块。")]),a._v(" "),t("p",[a._v("通过使用JDBC抽象和DAO模块，保证数据库代码的简洁，并能避免数据库资源错误关闭导致的问题，它在各种不同的数据库的错误信息之上，提供了一个统一的异常访问层。它还利用Spring的AOP 模块给Spring应用中的对象提供事务管理服务。")]),a._v(" "),t("h2",{attrs:{id:"_9-解释对象-关系映射集成模块。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-解释对象-关系映射集成模块。","aria-hidden":"true"}},[a._v("#")]),a._v(" 9. 解释对象/关系映射集成模块。")]),a._v(" "),t("p",[a._v("Spring 通过提供ORM模块，支持我们在直接JDBC之上使用一个对象/关系映射映射(ORM)工具，Spring 支持集成主流的ORM框架，如Hiberate,JDO和 iBATIS SQL Maps。Spring的事务管理同样支持以上所有ORM框架及JDBC。")]),a._v(" "),t("h2",{attrs:{id:"_10-解释web-模块。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-解释web-模块。","aria-hidden":"true"}},[a._v("#")]),a._v(" 10. 解释WEB 模块。")]),a._v(" "),t("p",[a._v("Spring的WEB模块是构建在application context 模块基础之上，提供一个适合web应用的上下文。这个模块也包括支持多种面向web的任务，如透明地处理多个文件上传请求和程序级请求参数的绑定到你的业务对象。它也有对Jakarta Struts的支持。")]),a._v(" "),t("h2",{attrs:{id:"_12-spring配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-spring配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 12. Spring配置文件")]),a._v(" "),t("p",[a._v("Spring配置文件是个XML 文件，这个文件包含了类信息，描述了如何配置它们，以及如何相互调用。")]),a._v(" "),t("h2",{attrs:{id:"_13-什么是spring-ioc-容器？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-什么是spring-ioc-容器？","aria-hidden":"true"}},[a._v("#")]),a._v(" 13. 什么是Spring IOC 容器？")]),a._v(" "),t("p",[a._v("Spring IOC 负责创建对象，管理对象（通过依赖注入（DI），装配对象，配置对象，并且管理这些对象的整个生命周期。")]),a._v(" "),t("h2",{attrs:{id:"_14-ioc的优点是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-ioc的优点是什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" 14. IOC的优点是什么？")]),a._v(" "),t("p",[a._v("IOC 或 依赖注入把应用的代码量降到最低。它使应用容易测试，单元测试不再需要单例和JNDI查找机制。最小的代价和最小的侵入性使松散耦合得以实现。IOC容器支持加载服务时的饿汉式初始化和懒加载。")]),a._v(" "),t("h2",{attrs:{id:"_15-applicationcontext通常的实现是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-applicationcontext通常的实现是什么","aria-hidden":"true"}},[a._v("#")]),a._v(" 15. ApplicationContext通常的实现是什么?")]),a._v(" "),t("ul",[t("li",[a._v("FileSystemXmlApplicationContext ：此容器从一个XML文件中加载beans的定义，XML Bean 配置文件的全路径名必须提供给它的构造函数。")]),a._v(" "),t("li",[a._v("ClassPathXmlApplicationContext：此容器也从一个XML文件中加载beans的定义，这里，你需要正确设置classpath因为这个容器将在classpath里找bean配置。")]),a._v(" "),t("li",[a._v("WebXmlApplicationContext：此容器加载一个XML文件，此文件定义了一个WEB应用的所有bean。")])]),a._v(" "),t("h2",{attrs:{id:"_16-bean-工厂和-application-contexts-有什么区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-bean-工厂和-application-contexts-有什么区别？","aria-hidden":"true"}},[a._v("#")]),a._v(" 16. Bean 工厂和 Application contexts 有什么区别？")]),a._v(" "),t("p",[a._v("Application contexts提供一种方法处理文本消息，一个通常的做法是加载文件资源（比如镜像），它们可以向注册为监听器的bean发布事件。另外，在容器或容器内的对象上执行的那些不得不由bean工厂以程序化方式处理的操作，可以在Application contexts中以声明的方式处理。Application contexts实现了MessageSource接口，该接口的实现以可插拔的方式提供获取本地化消息的方法。")]),a._v(" "),t("h2",{attrs:{id:"_17-一个spring的应用看起来象什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-一个spring的应用看起来象什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" 17. 一个Spring的应用看起来象什么？")]),a._v(" "),t("ul",[t("li",[a._v("一个定义了一些功能的接口。")]),a._v(" "),t("li",[a._v("这实现包括属性，它的Setter ， getter 方法和函数等。")]),a._v(" "),t("li",[a._v("Spring AOP。")]),a._v(" "),t("li",[a._v("Spring 的XML 配置文件。")]),a._v(" "),t("li",[a._v("使用以上功能的客户端程序。")])]),a._v(" "),t("h1",{attrs:{id:"依赖注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入","aria-hidden":"true"}},[a._v("#")]),a._v(" 依赖注入")]),a._v(" "),t("h2",{attrs:{id:"_18-什么是spring的依赖注入？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18-什么是spring的依赖注入？","aria-hidden":"true"}},[a._v("#")]),a._v(" 18. 什么是Spring的依赖注入？")]),a._v(" "),t("p",[a._v("依赖注入，是IOC的一个方面，是个通常的概念，它有多种解释。这概念是说你不用创建对象，而只需要描述它如何被创建。你不在代码里直接组装你的组件和服务，但是要在配置文件里描述哪些组件需要哪些服务，之后一个容器（IOC容器）负责把他们组装起来。")]),a._v(" "),t("h2",{attrs:{id:"_19-有哪些不同类型的ioc（依赖注入）方式？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19-有哪些不同类型的ioc（依赖注入）方式？","aria-hidden":"true"}},[a._v("#")]),a._v(" 19. 有哪些不同类型的IOC（依赖注入）方式？")]),a._v(" "),t("ul",[t("li",[a._v("构造器依赖注入：构造器依赖注入通过容器触发一个类的构造器来实现的，该类有一系列参数，每个参数代表一个对其他类的依赖。")]),a._v(" "),t("li",[a._v("Setter方法注入：Setter方法注入是容器通过调用无参构造器或无参static工厂 方法实例化bean之后，调用该bean的setter方法，即实现了基于setter的依赖注入。")])]),a._v(" "),t("h2",{attrs:{id:"_20-哪种依赖注入方式你建议使用，构造器注入，还是-setter方法注入？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20-哪种依赖注入方式你建议使用，构造器注入，还是-setter方法注入？","aria-hidden":"true"}},[a._v("#")]),a._v(" 20. 哪种依赖注入方式你建议使用，构造器注入，还是 Setter方法注入？")]),a._v(" "),t("p",[a._v("你两种依赖方式都可以使用，构造器注入和Setter方法注入。最好的解决方案是用构造器参数实现强制依赖，setter方法实现可选依赖。")]),a._v(" "),t("p",[a._v("Spring Beans")]),a._v(" "),t("h2",{attrs:{id:"_21-什么是spring-beans"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21-什么是spring-beans","aria-hidden":"true"}},[a._v("#")]),a._v(" 21.什么是Spring beans?")]),a._v(" "),t("p",[a._v("Spring beans 是那些形成Spring应用的主干的java对象。它们被Spring IOC容器初始化，装配，和管理。这些beans通过容器中配置的元数据创建。比如，以XML文件中<bean/> 的形式定义。")]),a._v(" "),t("p",[a._v("Spring 框架定义的beans都是单件beans。在bean tag中有个属性”singleton”，如果它被赋为TRUE，bean 就是单件，否则就是一个 prototype bean。默认是TRUE，所以所有在Spring框架中的beans 缺省都是单件。")]),a._v(" "),t("h2",{attrs:{id:"_22-一个-spring-bean-定义-包含什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_22-一个-spring-bean-定义-包含什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" 22. 一个 Spring Bean 定义 包含什么？")]),a._v(" "),t("p",[a._v("一个Spring Bean 的定义包含容器必知的所有配置元数据，包括如何创建一个bean，它的生命周期详情及它的依赖。")]),a._v(" "),t("h2",{attrs:{id:"_23-如何给spring-容器提供配置元数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_23-如何给spring-容器提供配置元数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 23. 如何给Spring 容器提供配置元数据?")]),a._v(" "),t("p",[a._v("这里有三种重要的方法给Spring 容器提供配置元数据。")]),a._v(" "),t("p",[a._v("XML配置文件。")]),a._v(" "),t("p",[a._v("基于注解的配置。")]),a._v(" "),t("p",[a._v("基于java的配置。")]),a._v(" "),t("h2",{attrs:{id:"_24-你怎样定义类的作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_24-你怎样定义类的作用域","aria-hidden":"true"}},[a._v("#")]),a._v(" 24. 你怎样定义类的作用域?")]),a._v(" "),t("p",[a._v("当定义一个<bean> 在Spring里，我们还能给这个bean声明一个作用域。它可以通过bean 定义中的scope属性来定义。如，当Spring要在需要的时候每次生产一个新的bean实例，bean的scope属性被指定为prototype。另一方面，一个bean每次使用的时候必须返回同一个实例，这个bean的scope 属性 必须设为 singleton。")]),a._v(" "),t("h2",{attrs:{id:"_25-解释spring支持的几种bean的作用域。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_25-解释spring支持的几种bean的作用域。","aria-hidden":"true"}},[a._v("#")]),a._v(" 25. 解释Spring支持的几种bean的作用域。")]),a._v(" "),t("p",[a._v("Spring框架支持以下五种bean的作用域：")]),a._v(" "),t("ul",[t("li",[a._v("singleton : bean在每个Spring ioc 容器中只有一个实例。")]),a._v(" "),t("li",[a._v("prototype：一个bean的定义可以有多个实例。")]),a._v(" "),t("li",[a._v("request：每次http请求都会创建一个bean，该作用域仅在基于web的Spring ApplicationContext情形下有效。")]),a._v(" "),t("li",[a._v("session：在一个HTTP Session中，一个bean定义对应一个实例。该作用域仅在基于web的Spring ApplicationContext情形下有效。")]),a._v(" "),t("li",[a._v("global-session：在一个全局的HTTP Session中，一个bean定义对应一个实例。该作用域仅在基于web的Spring ApplicationContext情形下有效。")])]),a._v(" "),t("p",[a._v("缺省的Spring bean 的作用域是Singleton.")]),a._v(" "),t("h2",{attrs:{id:"_26-spring框架中的单例bean是线程安全的吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_26-spring框架中的单例bean是线程安全的吗","aria-hidden":"true"}},[a._v("#")]),a._v(" 26. Spring框架中的单例bean是线程安全的吗?")]),a._v(" "),t("p",[a._v("不，Spring框架中的单例bean不是线程安全的。")]),a._v(" "),t("h2",{attrs:{id:"_27-解释spring框架中bean的生命周期。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_27-解释spring框架中bean的生命周期。","aria-hidden":"true"}},[a._v("#")]),a._v(" 27. 解释Spring框架中bean的生命周期。")]),a._v(" "),t("ul",[t("li",[a._v("Spring容器 从XML 文件中读取bean的定义，并实例化bean。")]),a._v(" "),t("li",[a._v("Spring根据bean的定义填充所有的属性。")]),a._v(" "),t("li",[a._v("如果bean实现了BeanNameAware 接口，Spring 传递bean 的ID 到 setBeanName方法。")]),a._v(" "),t("li",[a._v("如果Bean 实现了 BeanFactoryAware 接口， Spring传递beanfactory 给setBeanFactory 方法。")]),a._v(" "),t("li",[a._v("如果有任何与bean相关联的BeanPostProcessors，Spring会在postProcesserBeforeInitialization()方法内调用它们。")]),a._v(" "),t("li",[a._v("如果bean实现IntializingBean了，调用它的afterPropertySet方法，如果bean声明了初始化方法，调用此初始化方法。")]),a._v(" "),t("li",[a._v("如果有BeanPostProcessors 和bean 关联，这些bean的postProcessAfterInitialization() 方法将被调用。")]),a._v(" "),t("li",[a._v("如果bean实现了 DisposableBean，它将调用destroy()方法。")])]),a._v(" "),t("h2",{attrs:{id:"_28-哪些是重要的bean生命周期方法？你能重载它们吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_28-哪些是重要的bean生命周期方法？你能重载它们吗？","aria-hidden":"true"}},[a._v("#")]),a._v(" 28. 哪些是重要的bean生命周期方法？你能重载它们吗？")]),a._v(" "),t("p",[a._v("有两个重要的bean 生命周期方法，第一个是setup ， 它是在容器加载bean的时候被调用。第二个方法是 teardown 它是在容器卸载类的时候被调用。")]),a._v(" "),t("p",[a._v("The bean 标签有两个重要的属性（init-method和destroy-method）。用它们你可以自己定制初始化和注销方法。它们也有相应的注解（@PostConstruct和@PreDestroy）。")]),a._v(" "),t("h2",{attrs:{id:"_29-什么是spring的内部bean？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_29-什么是spring的内部bean？","aria-hidden":"true"}},[a._v("#")]),a._v(" 29. 什么是Spring的内部bean？")]),a._v(" "),t("p",[a._v("当一个bean仅被用作另一个bean的属性时，它能被声明为一个内部bean，为了定义inner bean，在Spring 的 基于XML的 配置元数据中，可以在 <property/>或 <constructor-arg/> 元素内使用<bean/> 元素，内部bean通常是匿名的，它们的Scope一般是prototype。")]),a._v(" "),t("h2",{attrs:{id:"_30-在-spring中如何注入一个java集合？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_30-在-spring中如何注入一个java集合？","aria-hidden":"true"}},[a._v("#")]),a._v(" 30. 在 Spring中如何注入一个java集合？")]),a._v(" "),t("p",[a._v("Spring提供以下几种集合的配置元素：")]),a._v(" "),t("ul",[t("li",[a._v("<list>类型用于注入一列值，允许有相同的值。")]),a._v(" "),t("li",[a._v("<set> 类型用于注入一组值，不允许有相同的值。")]),a._v(" "),t("li",[a._v("<map> 类型用于注入一组键值对，键和值都可以为任意类型。")]),a._v(" "),t("li",[a._v("<props>类型用于注入一组键值对，键和值都只能为String类型。")])]),a._v(" "),t("h2",{attrs:{id:"_31-什么是bean装配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_31-什么是bean装配","aria-hidden":"true"}},[a._v("#")]),a._v(" 31. 什么是bean装配?")]),a._v(" "),t("p",[a._v("装配，或bean 装配是指在Spring 容器中把bean组装到一起，前提是容器需要知道bean的依赖关系，如何通过依赖注入来把它们装配到一起。")]),a._v(" "),t("h2",{attrs:{id:"_32-什么是bean的自动装配？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_32-什么是bean的自动装配？","aria-hidden":"true"}},[a._v("#")]),a._v(" 32. 什么是bean的自动装配？")]),a._v(" "),t("p",[a._v("Spring 容器能够自动装配相互合作的bean，这意味着容器不需要<constructor-arg>和<property>配置，能通过Bean工厂自动处理bean之间的协作。")]),a._v(" "),t("h2",{attrs:{id:"_33-解释不同方式的自动装配-。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_33-解释不同方式的自动装配-。","aria-hidden":"true"}},[a._v("#")]),a._v(" 33. 解释不同方式的自动装配 。")]),a._v(" "),t("p",[a._v("有五种自动装配的方式，可以用来指导Spring容器用自动装配方式来进行依赖注入。")]),a._v(" "),t("ul",[t("li",[a._v("no：默认的方式是不进行自动装配，通过显式设置ref 属性来进行装配。")]),a._v(" "),t("li",[a._v("byName：通过参数名 自动装配，Spring容器在配置文件中发现bean的autowire属性被设置成byname，之后容器试图匹配、装配和该bean的属性具有相同名字的bean。")]),a._v(" "),t("li",[a._v("byType:：通过参数类型自动装配，Spring容器在配置文件中发现bean的autowire属性被设置成byType，之后容器试图匹配、装配和该bean的属性具有相同类型的bean。如果有多个bean符合条件，则抛出错误。")]),a._v(" "),t("li",[a._v("constructor：这个方式类似于byType， 但是要提供给构造器参数，如果没有确定的带参数的构造器参数类型，将会抛出异常。")]),a._v(" "),t("li",[a._v("autodetect：首先尝试使用constructor来自动装配，如果无法工作，则使用byType方式。")])]),a._v(" "),t("h2",{attrs:{id:"_34-自动装配有哪些局限性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_34-自动装配有哪些局限性","aria-hidden":"true"}},[a._v("#")]),a._v(" 34.自动装配有哪些局限性 ?")]),a._v(" "),t("p",[a._v("自动装配的局限性是：")]),a._v(" "),t("ul",[t("li",[a._v("重写：你仍需用 <constructor-arg>和 <property> 配置来定义依赖，意味着总要重写自动装配。")]),a._v(" "),t("li",[a._v("基本数据类型：你不能自动装配简单的属性，如基本数据类型，String字符串，和类。")]),a._v(" "),t("li",[a._v("模糊特性：自动装配不如显式装配精确，如果有可能，建议使用显式装配。")])]),a._v(" "),t("h2",{attrs:{id:"_35-你可以在spring中注入一个null-和一个空字符串吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_35-你可以在spring中注入一个null-和一个空字符串吗？","aria-hidden":"true"}},[a._v("#")]),a._v(" 35. 你可以在Spring中注入一个null 和一个空字符串吗？")]),a._v(" "),t("p",[a._v("可以。")]),a._v(" "),t("h1",{attrs:{id:"spring注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring注解","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring注解")]),a._v(" "),t("h2",{attrs:{id:"_36-什么是基于java的spring注解配置-给一些注解的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_36-什么是基于java的spring注解配置-给一些注解的例子","aria-hidden":"true"}},[a._v("#")]),a._v(" 36. 什么是基于Java的Spring注解配置? 给一些注解的例子.")]),a._v(" "),t("p",[a._v("基于Java的配置，允许你在少量的Java注解的帮助下，进行你的大部分Spring配置而非通过XML文件。")]),a._v(" "),t("p",[a._v("以@Configuration 注解为例，它用来标记类可以当做一个bean的定义，被Spring IOC容器使用。另一个例子是@Bean注解，它表示此方法将要返回一个对象，作为一个bean注册进Spring应用上下文。")]),a._v(" "),t("h2",{attrs:{id:"_37-什么是基于注解的容器配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_37-什么是基于注解的容器配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 37. 什么是基于注解的容器配置?")]),a._v(" "),t("p",[a._v("相对于XML文件，注解型的配置依赖于通过字节码元数据装配组件，而非尖括号的声明。")]),a._v(" "),t("p",[a._v("开发者通过在相应的类，方法或属性上使用注解的方式，直接组件类中进行配置，而不是使用xml表述bean的装配关系。")]),a._v(" "),t("h2",{attrs:{id:"_38-怎样开启注解装配？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_38-怎样开启注解装配？","aria-hidden":"true"}},[a._v("#")]),a._v(" 38. 怎样开启注解装配？")]),a._v(" "),t("p",[a._v("注解装配在默认情况下是不开启的，为了使用注解装配，我们必须在Spring配置文件中配置 <context:annotation-config/>元素。")]),a._v(" "),t("h2",{attrs:{id:"_39-required-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_39-required-注解","aria-hidden":"true"}},[a._v("#")]),a._v(" 39. @Required 注解")]),a._v(" "),t("p",[a._v("这个注解表明bean的属性必须在配置的时候设置，通过一个bean定义的显式的属性值或通过自动装配，若@Required注解的bean属性未被设置，容器将抛出BeanInitializationException。")]),a._v(" "),t("h2",{attrs:{id:"_40-autowired-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_40-autowired-注解","aria-hidden":"true"}},[a._v("#")]),a._v(" 40. @Autowired 注解")]),a._v(" "),t("p",[a._v("@Autowired 注解提供了更细粒度的控制，包括在何处以及如何完成自动装配。它的用法和@Required一样，修饰setter方法、构造器、属性或者具有任意名称和/或多个参数的PN方法。")]),a._v(" "),t("h2",{attrs:{id:"_41-qualifier-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_41-qualifier-注解","aria-hidden":"true"}},[a._v("#")]),a._v(" 41. @Qualifier 注解")]),a._v(" "),t("p",[a._v("当有多个相同类型的bean却只有一个需要自动装配时，将@Qualifier 注解和@Autowire 注解结合使用以消除这种混淆，指定需要装配的确切的bean。")]),a._v(" "),t("h1",{attrs:{id:"spring数据访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring数据访问","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring数据访问")]),a._v(" "),t("h2",{attrs:{id:"_42-在spring框架中如何更有效地使用jdbc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_42-在spring框架中如何更有效地使用jdbc","aria-hidden":"true"}},[a._v("#")]),a._v(" 42.在Spring框架中如何更有效地使用JDBC?")]),a._v(" "),t("p",[a._v("使用SpringJDBC 框架，资源管理和错误处理的代价都会被减轻。所以开发者只需写statements 和 queries从数据存取数据，JDBC也可以在Spring框架提供的模板类的帮助下更有效地被使用，这个模板叫JdbcTemplate （例子见这里here）")]),a._v(" "),t("h2",{attrs:{id:"_43-jdbctemplate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_43-jdbctemplate","aria-hidden":"true"}},[a._v("#")]),a._v(" 43. JdbcTemplate")]),a._v(" "),t("p",[a._v("JdbcTemplate 类提供了很多便利的方法解决诸如把数据库数据转变成基本数据类型或对象，执行写好的或可调用的数据库操作语句，提供自定义的数据错误处理。")]),a._v(" "),t("h2",{attrs:{id:"_44-spring对dao的支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_44-spring对dao的支持","aria-hidden":"true"}},[a._v("#")]),a._v(" 44. Spring对DAO的支持")]),a._v(" "),t("p",[a._v("Spring对数据访问对象（DAO）的支持旨在简化它和数据访问技术如JDBC，Hibernate or JDO 结合使用。这使我们可以方便切换持久层。编码时也不用担心会捕获每种技术特有的异常。")]),a._v(" "),t("h2",{attrs:{id:"_45-使用spring通过什么方式访问hibernate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_45-使用spring通过什么方式访问hibernate","aria-hidden":"true"}},[a._v("#")]),a._v(" 45. 使用Spring通过什么方式访问Hibernate?")]),a._v(" "),t("p",[a._v("在Spring中有两种方式访问Hibernate：")]),a._v(" "),t("ul",[t("li",[a._v("控制反转 Hibernate Template和 Callback。")]),a._v(" "),t("li",[a._v("继承 HibernateDAOSupport提供一个AOP 拦截器。")])]),a._v(" "),t("h2",{attrs:{id:"_46-spring支持的orm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_46-spring支持的orm","aria-hidden":"true"}},[a._v("#")]),a._v(" 46. Spring支持的ORM")]),a._v(" "),t("p",[a._v("Spring支持以下ORM：")]),a._v(" "),t("ul",[t("li",[a._v("Hibernate")]),a._v(" "),t("li",[a._v("iBatis")]),a._v(" "),t("li",[a._v("JPA (Java Persistence API)")]),a._v(" "),t("li",[a._v("TopLink")]),a._v(" "),t("li",[a._v("JDO (Java Data Objects)")]),a._v(" "),t("li",[a._v("OJB")])]),a._v(" "),t("h2",{attrs:{id:"_47-如何通过hibernatedaosupport将spring和hibernate结合起来？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_47-如何通过hibernatedaosupport将spring和hibernate结合起来？","aria-hidden":"true"}},[a._v("#")]),a._v(" 47.如何通过HibernateDaoSupport将Spring和Hibernate结合起来？")]),a._v(" "),t("p",[a._v("用Spring的 SessionFactory 调用 LocalSessionFactory。集成过程分三步：")]),a._v(" "),t("ul",[t("li",[a._v("配置the Hibernate SessionFactory。")]),a._v(" "),t("li",[a._v("继承HibernateDaoSupport实现一个DAO。")]),a._v(" "),t("li",[a._v("在AOP支持的事务中装配。")])]),a._v(" "),t("h2",{attrs:{id:"_48-spring支持的事务管理类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_48-spring支持的事务管理类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 48. Spring支持的事务管理类型")]),a._v(" "),t("p",[a._v("Spring支持两种类型的事务管理：")]),a._v(" "),t("ul",[t("li",[a._v("编程式事务管理：这意味你通过编程的方式管理事务，给你带来极大的灵活性，但是难维护。")]),a._v(" "),t("li",[a._v("声明式事务管理：这意味着你可以将业务代码和事务管理分离，你只需用注解和XML配置来管理事务。")])]),a._v(" "),t("h2",{attrs:{id:"_49-spring框架的事务管理有哪些优点？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_49-spring框架的事务管理有哪些优点？","aria-hidden":"true"}},[a._v("#")]),a._v(" 49. Spring框架的事务管理有哪些优点？")]),a._v(" "),t("ul",[t("li",[a._v("它为不同的事务API 如 JTA，JDBC，Hibernate，JPA 和JDO，提供一个不变的编程模式。")]),a._v(" "),t("li",[a._v("它为编程式事务管理提供了一套简单的API而不是一些复杂的事务API如")]),a._v(" "),t("li",[a._v("它支持声明式事务管理。")]),a._v(" "),t("li",[a._v("它和Spring各种数据访问抽象层很好得集成。")])]),a._v(" "),t("h2",{attrs:{id:"_50-你更倾向用那种事务管理类型？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_50-你更倾向用那种事务管理类型？","aria-hidden":"true"}},[a._v("#")]),a._v(" 50. 你更倾向用那种事务管理类型？")]),a._v(" "),t("p",[a._v("大多数Spring框架的用户选择声明式事务管理，因为它对应用代码的影响最小，因此更符合一个无侵入的轻量级容器的思想。声明式事务管理要优于编程式事务管理，虽然比编程式事务管理（这种方式允许你通过代码控制事务）少了一点灵活性。")]),a._v(" "),t("h1",{attrs:{id:"spring面向切面编程（aop）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring面向切面编程（aop）","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring面向切面编程（AOP）")]),a._v(" "),t("h2",{attrs:{id:"_51-解释aop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_51-解释aop","aria-hidden":"true"}},[a._v("#")]),a._v(" 51. 解释AOP")]),a._v(" "),t("p",[a._v("面向切面的编程，或AOP， 是一种编程技术，允许程序模块化横向切割关注点，或横切典型的责任划分，如日志和事务管理。")]),a._v(" "),t("h2",{attrs:{id:"_52-aspect-切面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_52-aspect-切面","aria-hidden":"true"}},[a._v("#")]),a._v(" 52. Aspect 切面")]),a._v(" "),t("p",[a._v("AOP核心就是切面，它将多个类的通用行为封装成可重用的模块，该模块含有一组API提供横切功能。比如，一个日志模块可以被称作日志的AOP切面。根据需求的不同，一个应用程序可以有若干切面。在Spring AOP中，切面通过带有@Aspect注解的类实现。")]),a._v(" "),t("h2",{attrs:{id:"_52-在spring-aop-中，关注点和横切关注的区别是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_52-在spring-aop-中，关注点和横切关注的区别是什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" 52. 在Spring AOP 中，关注点和横切关注的区别是什么？")]),a._v(" "),t("p",[a._v("关注点是应用中一个模块的行为，一个关注点可能会被定义成一个我们想实现的一个功能。")]),a._v(" "),t("p",[a._v("横切关注点是一个关注点，此关注点是整个应用都会使用的功能，并影响整个应用，比如日志，安全和数据传输，几乎应用的每个模块都需要的功能。因此这些都属于横切关注点。")]),a._v(" "),t("h2",{attrs:{id:"_54-连接点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_54-连接点","aria-hidden":"true"}},[a._v("#")]),a._v(" 54. 连接点")]),a._v(" "),t("p",[a._v("连接点代表一个应用程序的某个位置，在这个位置我们可以插入一个AOP切面，它实际上是个应用程序执行Spring AOP的位置。")]),a._v(" "),t("h2",{attrs:{id:"_55-通知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_55-通知","aria-hidden":"true"}},[a._v("#")]),a._v(" 55. 通知")]),a._v(" "),t("p",[a._v("通知是个在方法执行前或执行后要做的动作，实际上是程序执行时要通过SpringAOP框架触发的代码段。")]),a._v(" "),t("p",[a._v("Spring切面可以应用五种类型的通知：")]),a._v(" "),t("ul",[t("li",[a._v("before：前置通知，在一个方法执行前被调用。")]),a._v(" "),t("li",[a._v("after: 在方法执行之后调用的通知，无论方法执行是否成功。")]),a._v(" "),t("li",[a._v("after-returning: 仅当方法成功完成后执行的通知。")]),a._v(" "),t("li",[a._v("after-throwing: 在方法抛出异常退出时执行的通知。")]),a._v(" "),t("li",[a._v("around: 在方法执行之前和之后调用的通知。")])]),a._v(" "),t("h2",{attrs:{id:"_56-切点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_56-切点","aria-hidden":"true"}},[a._v("#")]),a._v(" 56. 切点")]),a._v(" "),t("p",[a._v("切入点是一个或一组连接点，通知将在这些位置执行。可以通过表达式或匹配的方式指明切入点。")]),a._v(" "),t("h2",{attrs:{id:"_57-什么是引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_57-什么是引入","aria-hidden":"true"}},[a._v("#")]),a._v(" 57. 什么是引入?")]),a._v(" "),t("p",[a._v("引入允许我们在已存在的类中增加新的方法和属性。")]),a._v(" "),t("h2",{attrs:{id:"_58-什么是目标对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_58-什么是目标对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 58. 什么是目标对象?")]),a._v(" "),t("p",[a._v("被一个或者多个切面所通知的对象。它通常是一个代理对象。也指被通知（advised）对象。")]),a._v(" "),t("h2",{attrs:{id:"_59-什么是代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_59-什么是代理","aria-hidden":"true"}},[a._v("#")]),a._v(" 59. 什么是代理?")]),a._v(" "),t("p",[a._v("代理是通知目标对象后创建的对象。从客户端的角度看，代理对象和目标对象是一样的。")]),a._v(" "),t("h2",{attrs:{id:"_60-有几种不同类型的自动代理？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_60-有几种不同类型的自动代理？","aria-hidden":"true"}},[a._v("#")]),a._v(" 60. 有几种不同类型的自动代理？")]),a._v(" "),t("p",[a._v("BeanNameAutoProxyCreator")]),a._v(" "),t("p",[a._v("DefaultAdvisorAutoProxyCreator")]),a._v(" "),t("p",[a._v("Metadata autoproxying")]),a._v(" "),t("h2",{attrs:{id:"_61-什么是织入。什么是织入应用的不同点？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_61-什么是织入。什么是织入应用的不同点？","aria-hidden":"true"}},[a._v("#")]),a._v(" 61. 什么是织入。什么是织入应用的不同点？")]),a._v(" "),t("p",[a._v("织入是将切面和到其他应用类型或对象连接或创建一个被通知对象的过程。")]),a._v(" "),t("p",[a._v("织入可以在编译时，加载时，或运行时完成。")]),a._v(" "),t("h2",{attrs:{id:"_62-解释基于xml-schema方式的切面实现。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_62-解释基于xml-schema方式的切面实现。","aria-hidden":"true"}},[a._v("#")]),a._v(" 62. 解释基于XML Schema方式的切面实现。")]),a._v(" "),t("p",[a._v("在这种情况下，切面由常规类以及基于XML的配置实现。")]),a._v(" "),t("h2",{attrs:{id:"_63-解释基于注解的切面实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_63-解释基于注解的切面实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 63. 解释基于注解的切面实现")]),a._v(" "),t("p",[a._v("在这种情况下(基于@AspectJ的实现)，涉及到的切面声明的风格与带有java5标注的普通java类一致。")]),a._v(" "),t("h1",{attrs:{id:"spring-mvc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring MVC")]),a._v(" "),t("h2",{attrs:{id:"_64-什么是spring的mvc框架？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_64-什么是spring的mvc框架？","aria-hidden":"true"}},[a._v("#")]),a._v(" 64. 什么是Spring的MVC框架？")]),a._v(" "),t("p",[a._v("Spring 配备构建Web 应用的全功能MVC框架。Spring可以很便捷地和其他MVC框架集成，如Struts，Spring 的MVC框架用控制反转把业务对象和控制逻辑清晰地隔离。它也允许以声明的方式把请求参数和业务对象绑定。")]),a._v(" "),t("h2",{attrs:{id:"_65-dispatcherservlet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_65-dispatcherservlet","aria-hidden":"true"}},[a._v("#")]),a._v(" 65. DispatcherServlet")]),a._v(" "),t("p",[a._v("Spring的MVC框架是围绕DispatcherServlet来设计的，它用来处理所有的HTTP请求和响应。")]),a._v(" "),t("h2",{attrs:{id:"_66-webapplicationcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_66-webapplicationcontext","aria-hidden":"true"}},[a._v("#")]),a._v(" 66. WebApplicationContext")]),a._v(" "),t("p",[a._v("WebApplicationContext 继承了ApplicationContext 并增加了一些WEB应用必备的特有功能，它不同于一般的ApplicationContext ，因为它能处理主题，并找到被关联的servlet。")]),a._v(" "),t("h2",{attrs:{id:"_67-什么是spring-mvc框架的控制器？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_67-什么是spring-mvc框架的控制器？","aria-hidden":"true"}},[a._v("#")]),a._v(" 67. 什么是Spring MVC框架的控制器？")]),a._v(" "),t("p",[a._v("控制器提供一个访问应用程序的行为，此行为通常通过服务接口实现。控制器解析用户输入并将其转换为一个由视图呈现给用户的模型。Spring用一个非常抽象的方式实现了一个控制层，允许用户创建多种用途的控制器。")]),a._v(" "),t("h2",{attrs:{id:"_68-controller-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_68-controller-注解","aria-hidden":"true"}},[a._v("#")]),a._v(" 68. @Controller 注解")]),a._v(" "),t("p",[a._v("该注解表明该类扮演控制器的角色，Spring不需要你继承任何其他控制器基类或引用Servlet API。")]),a._v(" "),t("h2",{attrs:{id:"_69-requestmapping-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_69-requestmapping-注解","aria-hidden":"true"}},[a._v("#")]),a._v(" 69. @RequestMapping 注解")]),a._v(" "),t("p",[a._v("该注解是用来映射一个URL到一个类或一个特定的方处理法上。")])])}),[],!1,null,null,null);r.default=i.exports}}]);