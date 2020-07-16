>  在做项目的时候，我们可能会遇到需要经常变动静态文件和配置文件的时候，如果我们每次修改都要重新
> 打包，那太痛苦，springboot给我们提供了方法，解决这个问题

### 常见的pom build配置
```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```
这个是将项目的所有文件都给打包进同一个jar包中，
每次修改了静态文件或配置文件application.yml都需要重新打包配置

### 将静态资源文件配置到项目外
pom 的配置
```xml
<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <!--fork :  如果没有该项配置，devtools不会起作用，即应用不会restart -->
                    <fork>true</fork>
					<!--重写包含依赖，包含不存在的依赖，jar里没有pom里的依赖-->
					<includes>
						<include>
							<groupId>null</groupId>
							<artifactId>null</artifactId>
						</include>
					</includes>
					<layout>ZIP</layout>
					<!--使用外部配置文件，jar包里没有资源文件-->
					<addResources>true</addResources>
					<outputDirectory>${project.build.directory}</outputDirectory>
                </configuration>
				<executions>
					<execution>
						<goals>
							<goal>repackage</goal>
						</goals>
						<configuration>
							<!--配置jar包特殊标识 配置后，保留原文件，生成新文件 *-run.jar -->
							<!--配置jar包特殊标识 不配置，原文件命名为 *.jar.original，生成新文件 *.jar -->
							<!--<classifier>run</classifier>-->
						</configuration>
					</execution>
				</executions>
			</plugin>
			<!--打包jar-->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-jar-plugin</artifactId>
				<configuration>
					<!--不打包资源文件-->
					<excludes>
						<exclude>*.**</exclude>
						<exclude>*/*.xml</exclude>
					</excludes>
					<archive>
						<manifest>
							<addClasspath>true</addClasspath>
							<!--MANIFEST.MF 中 Class-Path 加入前缀-->
							<classpathPrefix>lib/</classpathPrefix>
							<!--jar包不包含唯一版本标识-->
							<useUniqueVersions>false</useUniqueVersions>
							<!--指定入口类-->
							<mainClass>com.zykj.general.GeneralApplication</mainClass>
						</manifest>
						<manifestEntries>
							<!--MANIFEST.MF 中 Class-Path 加入资源文件目录-->
							<Class-Path>./resources/</Class-Path>
						</manifestEntries>
					</archive>
					<outputDirectory>${project.build.directory}</outputDirectory>
				</configuration>
			</plugin>
			<!--拷贝依赖 copy-dependencies-->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-dependency-plugin</artifactId>
				<executions>
					<execution>
						<id>copy-dependencies</id>
						<phase>package</phase>
						<goals>
							<goal>copy-dependencies</goal>
						</goals>
						<configuration>
							<outputDirectory>
								${project.build.directory}/lib/
							</outputDirectory>
						</configuration>
					</execution>
				</executions>
			</plugin>
			<!--拷贝资源文件 copy-resources-->
			<plugin>
				<artifactId>maven-resources-plugin</artifactId>
				<executions>
					<execution>
						<id>copy-resources</id>
						<phase>package</phase>
						<goals>
							<goal>copy-resources</goal>
						</goals>
						<configuration>
							<resources>
								<resource>
									<directory>src/main/resources</directory>
								</resource>
							</resources>
							<outputDirectory>${project.build.directory}/resources</outputDirectory>
						</configuration>
					</execution>
				</executions>
			</plugin>

		</plugins>
	</build>
```