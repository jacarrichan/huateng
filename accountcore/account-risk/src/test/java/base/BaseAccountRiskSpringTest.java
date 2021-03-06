package base;

import junit.framework.TestCase;

import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

//指定测试用例的运行器 这里是指定了Junit4  
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:account-risk.xml")
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = true)
@Transactional
public abstract class BaseAccountRiskSpringTest extends TestCase{

}
