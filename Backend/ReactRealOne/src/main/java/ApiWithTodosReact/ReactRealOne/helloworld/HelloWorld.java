package ApiWithTodosReact.ReactRealOne.helloworld;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
	@Autowired
   private MessageSource messagesource;
	@GetMapping("/helloworld")
  public String helloWorld()
  {
	  return "Hello World";
  }
	@GetMapping("/basicauth") // this method is used to check the user is logined or not by test if return 200 its ok
	  public String BasicAuthicated()
	  {
		  return "success";
	  }
	@GetMapping("helloworld/{path}")
	  public String helloWorldWithPath(@PathVariable String path)
	  {
		  return "Hello World"+path;
	  }
  @GetMapping("helloworldBean")
  public HelloBean helloWorldBean()
  {
	 HelloBean v= new HelloBean("Hello World");
 return v;
  }
  @GetMapping("helloworld-internation")
  public String helloWorldInternation()
  {     
	  Locale locale=LocaleContextHolder.getLocale();
	                              // message defined on mess
	  return messagesource.getMessage("good.morning.message",null ,"Default Message", locale);
	 // return "Hello World";
  }
}
