			package ApiWithTodosReact.ReactRealOne;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ReactRealOneApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactRealOneApplication.class, args);
	}
	// this method is used to get access from another port to this port by api call 
  @Bean
  public WebMvcConfigurer corsConfigurer()
  {
	  return new WebMvcConfigurer()
			  {
		            public void addCorsMappings(CorsRegistry registry)
		        {
		            	 registry.addMapping("/**")
	                        .allowedOrigins("http://192.168.1.2:3000", "http://localhost:3000")
	                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
	                        .allowedHeaders("*")
	                        .allowCredentials(true);
		        }
			  };
  }
}
