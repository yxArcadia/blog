# Excel工具类
## 导入maven依赖
```xml
<dependency>
   <groupId>cn.afterturn</groupId>
   <artifactId>easypoi-base</artifactId>
   <version>3.0.3</version>
</dependency>
<dependency>
   <groupId>cn.afterturn</groupId>
   <artifactId>easypoi-web</artifactId>
   <version>3.0.3</version> </dependency>
<dependency>
   <groupId>cn.afterturn</groupId>
   <artifactId>easypoi-annotation</artifactId>
   <version>3.0.3</version>
</dependency>
```
## 工具类
```java
    import cn.afterturn.easypoi.excel.ExcelExportUtil;
    import cn.afterturn.easypoi.excel.ExcelImportUtil;
    import cn.afterturn.easypoi.excel.entity.ExportParams;
    import cn.afterturn.easypoi.excel.entity.ImportParams;
    import cn.afterturn.easypoi.util.PoiPublicUtil;
    import org.apache.poi.ss.usermodel.Workbook;
    import javax.servlet.http.HttpServletResponse;
    import java.io.File;
    import java.io.IOException;
    import java.lang.reflect.ParameterizedType;
    import java.util.List;
    import java.util.Map;
    
    /**
     * @author yangxiang
     * @date 2019/10/18 10:51
     */
    public class ExcelUtil {
        /**
         * 导入excel文件
         * @param filepath 文件路径
         * @return 导入的内容
         */
        public static List importExcel(String filepath){
            List<Map<String,Object>> list = ExcelImportUtil.importExcel(
                    new File(PoiPublicUtil.getWebRootPath(filepath)),
                    Map.class,
                    new ImportParams()
            );
            return list;
        }
    
        /**
         * 导出excel表
         * @param response HttpResponse
         * @param list 导出的数据
         * @param fileName 导出的文件名
         * @param c 实体类类型
         * @throws IOException io异常
         */
        public static void expottExcel(HttpServletResponse response, List list,Class c, String fileName) throws IOException {
                // 设置响应输出的头类型及下载文件的默认名称
                fileName = new String((fileName+".xls").getBytes("utf-8"), "ISO-8859-1");
                response.addHeader("Content-Disposition", "attachment;filename=" + fileName);
                response.setContentType("application/vnd.ms-excel;charset=gb2312");
                //导出
                Workbook workbook = ExcelExportUtil.exportExcel(new ExportParams(), c, list);
                workbook.write(response.getOutputStream());
        }
    }
```
## 实体类需要相应注解
```java
package cn.yxvk.hello.excel.entity;

import cn.afterturn.easypoi.excel.annotation.Excel;

/**
 * @author yangxiang
 * @date 2019/10/18 10:25
 */

public class User {
    @Excel(name = "用户名", width = 25,orderNum = "0")
    private String username;
    @Excel(name = "年龄", width = 25,orderNum = "0")
    private Integer age;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
    public User(){};
    public User(String username, Integer age) {
        this.username = username;
        this.age = age;
    }
}

```