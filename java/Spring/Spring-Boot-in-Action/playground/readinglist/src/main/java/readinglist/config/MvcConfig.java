package readinglist.config;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import readinglist.component.ReaderHandlerMethodArgumentResolver;

import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

@Configuration
public class MvcConfig implements WebMvcConfigurer
{
    @Override
    public void addViewControllers(ViewControllerRegistry registry)
    {
        registry.addViewController("/login").setViewName("login");
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers)
    {
        argumentResolvers.add(new ReaderHandlerMethodArgumentResolver());
    }
}
