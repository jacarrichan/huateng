package com.huateng.p3.account.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class PidUtil
{
  // 每位加权因子
  private static final int[] power = { 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 };
  
  private static final String[] cityCode = { "11", "12", "13", "14", "15", "21", "22",
			"23", "31", "32", "33", "34", "35", "36", "37", "41", "42", "43",
			"44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63",
			"64", "65", "71", "81", "82", "91" };
  /**
   * 15位身份证转化为18位
   * @param paramString
   * @return
   */
  public static String convertPid(String paramString)
  {
    if (paramString.length() == 15) {
      String str1 = "";

      String str2 = "";

      String str3 = "";

      String str4 = "";

      int i = 0;

      int j = 0;

      String str5 = "";

      str1 = paramString;

      str2 = str1.substring(0, 6);

      str3 = str1.substring(6, 15);

      str4 = str2 + "19" + str3;

      i += (str4.charAt(0) - '0') * 7;

      i += (str4.charAt(1) - '0') * 9;

      i += (str4.charAt(2) - '0') * 10;

      i += (str4.charAt(3) - '0') * 5;

      i += (str4.charAt(4) - '0') * 8;

      i += (str4.charAt(5) - '0') * 4;

      i += (str4.charAt(6) - '0') * 2;

      i += (str4.charAt(7) - '0') * 1;

      i += (str4.charAt(8) - '0') * 6;

      i += (str4.charAt(9) - '0') * 3;

      i += (str4.charAt(10) - '0') * 7;

      i += (str4.charAt(11) - '0') * 9;

      i += (str4.charAt(12) - '0') * 10;

      i += (str4.charAt(13) - '0') * 5;

      i += (str4.charAt(14) - '0') * 8;

      i += (str4.charAt(15) - '0') * 4;

      i += (str4.charAt(16) - '0') * 2;

      j = i % 11;

      switch (j)
      {
      case 0:
        str5 = "1";
        break;
      case 1:
        str5 = "0";
        break;
      case 2:
        str5 = "X";
        break;
      case 3:
        str5 = "9";
        break;
      case 4:
        str5 = "8";
        break;
      case 5:
        str5 = "7";
        break;
      case 6:
        str5 = "6";
        break;
      case 7:
        str5 = "5";
        break;
      case 8:
        str5 = "4";
        break;
      case 9:
        str5 = "3";
        break;
      case 10:
        str5 = "2";
      }

      paramString = str4 + str5;
    }

    paramString = paramString.toUpperCase();

    return paramString;
  }
  
	/**
	 * 判断18位身份证的合法性
	 * 
	 * 根据〖中华人民共和国国家标准GB11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，由十七位数字本体码和一位数字校验码组成。
	 * 排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
	 * 
	 * 顺序码: 表示在同一地址码所标识的区域范围内，对同年、同月、同 日出生的人编定的顺序号，顺序码的奇数分配给男性，偶数分配 给女性。
	 * 
	 * 1.前1、2位数字表示：所在省份的代码； 
	 * 2.第3、4位数字表示：所在城市的代码； 
	 * 3.第5、6位数字表示：所在区县的代码；
	 * 4.第7~14位数字表示：出生年、月、日； 
	 * 5.第15、16位数字表示：所在地的派出所的代码；
	 * 6.第17位数字表示性别：奇数表示男性，偶数表示女性；
	 * 7.第18位数字是校检码：也有的说是个人信息码，一般是随计算机的随机产生，用来检验身份证的正确性。校检码可以是0~9的数字，有时也用x表示。
	 * 
	 * 第十八位数字(校验码)的计算方法为： 
	 * 1.将前面的身份证号码17位数分别乘以不同的系数。从第一位到第十七位的系数分别为：7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 
	 * 2.将这17位数字和系数相乘的结果相加。 
	 * 3.用加出来和除以11，看余数是多少？ 
	 * 4.余数只可能有0 1 2 3 4 5 6 7 8 9 10这11个数字,其分别对应的最后一位身份证的号码为1 0 X 9 8 7 6 5 4 3 2。
	 * 5.通过上面得知如果余数是2，就会在身份证的第18位数字上出现罗马数字的Ⅹ;如果余数是10，身份证的最后一位号码就是2。
	 */
	public static boolean isValidate18idCard(String idCard) {
		// 非18位为假
		if (idCard.length() != 18) {
			return false;
		}
		// 获取前17位
		String idCard17 = idCard.substring(0, 17);
		// 获取第18位
		String idCard18Code = idCard.substring(17, 18);
		char[] c = null;
		String checkCode = "";
		// 是否都为数字
		if (isDigital(idCard17)) {
			c = idCard17.toCharArray();
		} else {
			return false;
		}
		if (null != c) {
			int bit[] = converCharToInt(c);
			int sum17 = 0;
			sum17 = getPowerSum(bit);
			// 将和值与11取模得到余数进行校验码判断
			checkCode = getCheckCodeBySum(sum17);
			if (null == checkCode) {
				return false;
			}
			// 将身份证的第18位与算出来的校码进行匹配，不相等就为假
			if (!idCard18Code.equalsIgnoreCase(checkCode)) {
				return false;
			}
		}
		return true;
	}

	/**
	 * 验证15位身份证的合法性,该方法验证不准确，最好是将15转为18位后再判断，该类中已提供。
	 * 
	 * @param idCard
	 * @return
	 */
	public static boolean isValidate15idCard(String idCard) {
		// 非18位为假
		if (idCard.length() != 15) {
			return false;
		}
		// 是否全都为数字
		if (isDigital(idCard)) {
			String provinceid = idCard.substring(0, 2);
			String birthday = idCard.substring(6, 12);
			int year = Integer.parseInt(idCard.substring(6, 8));
			int month = Integer.parseInt(idCard.substring(8, 10));
			int day = Integer.parseInt(idCard.substring(10, 12));
			// 判断是否为合法的省份
			boolean flag = false;
			for (String id : cityCode) {
				if (id.equals(provinceid)) {
					flag = true;
					break;
				}
			}
			if (!flag) {
				return false;
			}
			// 该身份证生出日期在当前日期之后时为假
			Date birthdate = null;
			try {
				birthdate = new SimpleDateFormat("yyMMdd").parse(birthday);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			if (birthdate == null || new Date().before(birthdate)) {
				return false;
			}
			// 判断是否为合法的年份
			GregorianCalendar curDay = new GregorianCalendar();
			int curYear = curDay.get(Calendar.YEAR);
			int year2bit = Integer.parseInt(String.valueOf(curYear)
					.substring(2));
			// 判断该年份的两位表示法，小于50的和大于当前年份的，为假
			if ((year < 50 && year > year2bit)) {
				return false;
			}
			// 判断是否为合法的月份
			if (month < 1 || month > 12) {
				return false;
			}
			// 判断是否为合法的日期
			boolean mflag = false;
			curDay.setTime(birthdate); // 将该身份证的出生日期赋于对象curDay
			switch (month) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				mflag = (day >= 1 && day <= 31);
				break;
			case 2: // 公历的2月非闰年有28天,闰年的2月是29天。
				if (curDay.isLeapYear(curDay.get(Calendar.YEAR))) {
					mflag = (day >= 1 && day <= 29);
				} else {
					mflag = (day >= 1 && day <= 28);
				}
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				mflag = (day >= 1 && day <= 30);
				break;
			}
			if (!mflag) {
				return false;
			}
		} else {
			return false;
		}
		return true;
	}
	
	/**
	 * 数字验证
	 * 
	 * @param str
	 * @return
	 */
	public static boolean isDigital(String str) {
		return str == null || "".equals(str) ? false : str.matches("^[0-9]*$");
	}
	
	/**
	 * 将字符数组转为整型数组
	 * 
	 * @param c
	 * @return
	 * @throws NumberFormatException
	 */
	public static int[] converCharToInt(char[] c) throws NumberFormatException {
		int[] a = new int[c.length];
		int k = 0;
		for (char temp : c) {
			a[k++] = Integer.parseInt(String.valueOf(temp));
		}
		return a;
	}

	/**
	 * 将身份证的每位和对应位的加权因子相乘之后，再得到和值
	 * 
	 * @param bit
	 * @return
	 */
	public static int getPowerSum(int[] bit) {
		int sum = 0;
		if (power.length != bit.length) {
			return sum;
		}
		for (int i = 0; i < bit.length; i++) {
			for (int j = 0; j < power.length; j++) {
				if (i == j) {
					sum = sum + bit[i] * power[j];
				}
			}
		}
		return sum;
	}
	
	/**
	 * 将和值与11取模得到余数进行校验码判断
	 * 
	 * @param checkCode
	 * @param sum17
	 * @return 校验位
	 */
	public static String getCheckCodeBySum(int sum17) {
		String checkCode = null;
		switch (sum17 % 11) {
		case 10:
			checkCode = "2";
			break;
		case 9:
			checkCode = "3";
			break;
		case 8:
			checkCode = "4";
			break;
		case 7:
			checkCode = "5";
			break;
		case 6:
			checkCode = "6";
			break;
		case 5:
			checkCode = "7";
			break;
		case 4:
			checkCode = "8";
			break;
		case 3:
			checkCode = "9";
			break;
		case 2:
			checkCode = "x";
			break;
		case 1:
			checkCode = "0";
			break;
		case 0:
			checkCode = "1";
			break;
		}
		return checkCode;
	}

}
