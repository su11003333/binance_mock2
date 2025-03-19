import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SignIn = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [accountType, setAccountType] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // For verification code countdown
  const [countdown, setCountdown] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      console.log('Login attempt:', { 
        account: accountType === 'email' ? email : phone, 
        accountType, 
        password, 
        rememberMe 
      });
    } else {
      if (!verificationSent) {
        console.log('Verification needed before registration');
        return;
      }
      console.log('Registration attempt:', { 
        account: accountType === 'email' ? email : phone, 
        accountType, 
        password, 
        verificationCode,
        agreeTerms 
      });
    }
  };

  const handleSendVerification = () => {
    if (accountType === 'email' && !email) {
      alert('請輸入電子郵件');
      return;
    }
    if (accountType === 'phone' && !phone) {
      alert('請輸入手機號碼');
      return;
    }
    
    console.log(`Sending verification code to ${accountType === 'email' ? email : phone}`);
    setVerificationSent(true);
    setCountdown(60);
    
    // Start countdown
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left side with logo and background */}
      <div className="hidden lg:flex lg:w-1/2 bg-bnb-dark flex-col items-center justify-center p-12 text-white relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/api/placeholder/800/1200" alt="Background pattern" className="w-full h-full object-cover" />
        </div>
        
        {/* Content overlay */}
        <div className="z-10 flex flex-col items-center">
          <div className="mb-12">
            <div className="text-3xl font-bold text-yellow-400">CoinEx</div>
          </div>
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-white">Welcome to CoinEx</h2>
            <p className="text-xl mb-8 text-gray-400">Your trusted platform for cryptocurrency trading and exchange services.</p>
            
            {/* Image placeholder for the main illustration */}
            <div className="mb-12 flex justify-center">
              <img src="/api/placeholder/400/300" alt="Cryptocurrency illustration" className="rounded-lg shadow-bnb" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="bg-bnb-gray p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-2 text-yellow-400">300+</div>
                <div className="text-sm text-gray-400">Cryptocurrencies</div>
              </div>
              <div className="bg-bnb-gray p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-2 text-yellow-400">200+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="bg-bnb-gray p-4 rounded-lg text-center">
                <div className="text-2xl font-bold mb-2 text-yellow-400">10M+</div>
                <div className="text-sm text-gray-400">Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-bnb-dark">
        <div className="w-full max-w-md">
          {/* Logo for mobile view */}
          <div className="lg:hidden mb-8 flex justify-center">
            <div className="text-2xl font-bold text-yellow-400">CoinEx</div>
          </div>

          {/* Tabs */}
          <div className="flex mb-8 border-b border-bnb-light-gray">
            <button 
              className={`flex-1 py-4 font-medium text-center ${activeTab === 'login' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('login')}
            >
              登入
            </button>
            <button 
              className={`flex-1 py-4 font-medium text-center ${activeTab === 'register' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('register')}
            >
              註冊
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Account type toggle (only for register) */}
            {activeTab === 'register' && (
              <div className="mb-6">
                <div className="flex rounded-lg overflow-hidden bg-bnb-gray">
                  <button
                    type="button"
                    className={`flex-1 py-2 px-4 text-center ${accountType === 'email' ? 'bg-bnb-hover-gray text-white' : 'text-gray-400'}`}
                    onClick={() => setAccountType('email')}
                  >
                    電子郵件
                  </button>
                  <button
                    type="button"
                    className={`flex-1 py-2 px-4 text-center ${accountType === 'phone' ? 'bg-bnb-hover-gray text-white' : 'text-gray-400'}`}
                    onClick={() => setAccountType('phone')}
                  >
                    手機號碼
                  </button>
                </div>
              </div>
            )}

            {/* Email field */}
            {(activeTab === 'login' || (activeTab === 'register' && accountType === 'email')) && (
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  電子郵件
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-bnb-gray border border-bnb-light-gray rounded-lg focus:border-yellow-400 text-white placeholder-gray-500"
                  placeholder="請輸入您的電子郵件"
                  required={activeTab === 'login' || (activeTab === 'register' && accountType === 'email')}
                />
              </div>
            )}

            {/* Phone field */}
            {activeTab === 'register' && accountType === 'phone' && (
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  手機號碼
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-bnb-gray border border-bnb-light-gray rounded-lg focus:border-yellow-400 text-white placeholder-gray-500"
                  placeholder="請輸入您的手機號碼"
                  required={activeTab === 'register' && accountType === 'phone'}
                />
              </div>
            )}

            {/* Verification code field (only for register) */}
            {activeTab === 'register' && (
              <div className="mb-6">
                <label htmlFor="verification" className="block text-sm font-medium text-gray-400 mb-2">
                  驗證碼
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="verification"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="flex-1 px-4 py-3 bg-bnb-gray border border-bnb-light-gray rounded-lg focus:border-yellow-400 text-white placeholder-gray-500"
                    placeholder="請輸入驗證碼"
                    required={activeTab === 'register'}
                  />
                  <button
                    type="button"
                    onClick={handleSendVerification}
                    disabled={countdown > 0}
                    className={`px-4 py-2 rounded-lg ${countdown > 0 ? 'bg-bnb-light-gray text-gray-400' : 'bg-yellow-400 text-black hover:bg-yellow-500'}`}
                  >
                    {countdown > 0 ? `重新發送 (${countdown}s)` : '發送驗證碼'}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  {verificationSent ? '驗證碼已發送，請檢查您的信箱或手機' : '點擊發送驗證碼按鈕獲取驗證碼'}
                </p>
              </div>
            )}

            {/* Password field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                密碼
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-bnb-gray border border-bnb-light-gray rounded-lg focus:border-yellow-400 text-white placeholder-gray-500"
                placeholder="請輸入您的密碼"
                required
              />
            </div>

            {/* Confirm Password field (only for register) */}
            {activeTab === 'register' && (
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
                  確認密碼
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-bnb-gray border border-bnb-light-gray rounded-lg focus:border-yellow-400 text-white placeholder-gray-500"
                  placeholder="請再次輸入您的密碼"
                  required={activeTab === 'register'}
                />
              </div>
            )}

            {/* Remember me / Terms checkbox */}
            {activeTab === 'login' ? (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="w-4 h-4 bg-bnb-gray border-bnb-light-gray rounded text-yellow-400"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                    記住我
                  </label>
                </div>
                <a href="#" className="text-sm text-yellow-400 hover:underline">
                  忘記密碼？
                </a>
              </div>
            ) : (
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    className="w-4 h-4 bg-bnb-gray border-bnb-light-gray rounded text-yellow-400"
                    required={activeTab === 'register'}
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                  我同意 
                  <button 
                    type="button" 
                    onClick={() => setShowTermsModal(true)} 
                    className="text-yellow-400 hover:underline mx-1"
                  >
                    服務條款
                  </button> 
                  和 
                  <button 
                    type="button" 
                    onClick={() => setShowPrivacyModal(true)} 
                    className="text-yellow-400 hover:underline ml-1"
                  >
                    隱私政策
                  </button>
                </label>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-4 rounded-lg focus:outline-none transition duration-150 font-medium"
            >
              {activeTab === 'login' ? '登入' : '註冊'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-bnb-light-gray"></div>
            <span className="px-4 text-sm text-gray-500">或</span>
            <div className="flex-grow border-t border-bnb-light-gray"></div>
          </div>

          {/* Social login options */}
          <div className="grid grid-cols-3 gap-4">
            <button className="flex justify-center items-center py-2 px-4 border border-bnb-light-gray rounded-lg hover:bg-bnb-hover-gray bg-bnb-gray">
              <span className="sr-only">Google</span>
              <span className="text-xl text-white">G</span>
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-bnb-light-gray rounded-lg hover:bg-bnb-hover-gray bg-bnb-gray">
              <span className="sr-only">Apple</span>
              <span className="text-xl text-white">A</span>
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-bnb-light-gray rounded-lg hover:bg-bnb-hover-gray bg-bnb-gray">
              <span className="sr-only">Facebook</span>
              <span className="text-xl text-white">F</span>
            </button>
          </div>

          {/* Mobile version help text */}
          <div className="mt-8 text-center text-sm text-gray-400">
            <span>{activeTab === 'login' ? '還沒有帳號？' : '已經有帳號？'}</span>
            <button 
              type="button"
              className="ml-1 text-yellow-400 hover:underline focus:outline-none"
              onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
            >
              {activeTab === 'login' ? '立即註冊' : '立即登入'}
            </button>
          </div>

          {/* Help section */}
          <div className="mt-8 text-center">
            <a href="#" className="text-sm text-yellow-400 hover:underline">
              需要幫助？
            </a>
          </div>
        </div>
      </div>

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-bnb-gray rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">服務條款</h3>
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="text-gray-300">
                <h4 className="font-bold mb-2">1. 接受條款</h4>
                <p className="mb-4">
                  通過訪問或使用CoinEx服務，您同意受本服務條款的約束。如果您不同意這些條款的任何部分，則不得使用我們的服務。
                </p>
                
                <h4 className="font-bold mb-2">2. 帳戶註冊</h4>
                <p className="mb-4">
                  要使用我們的某些服務，您必須註冊一個帳戶。您同意提供準確、完整和最新的資訊，並對保護您的帳戶安全性負責。
                </p>
                
                <h4 className="font-bold mb-2">3. 服務使用</h4>
                <p className="mb-4">
                  我們的服務僅供個人使用。您不得將我們的服務用於任何非法目的或違反任何適用法律或法規。
                </p>
                
                <h4 className="font-bold mb-2">4. 隱私</h4>
                <p className="mb-4">
                  您的隱私對我們很重要。我們的隱私政策解釋了我們如何收集、使用和保護您的個人資訊。
                </p>
                
                <h4 className="font-bold mb-2">5. 服務變更</h4>
                <p className="mb-4">
                  我們保留隨時修改或終止服務的權利，恕不另行通知。我們對任何此類修改、價格變更、暫停或終止服務不承擔責任。
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500"
                >
                  我已閱讀並同意
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-bnb-gray rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">隱私政策</h3>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="text-gray-300">
                <h4 className="font-bold mb-2">1. 資訊收集</h4>
                <p className="mb-4">
                  我們收集的個人資訊包括姓名、聯繫方式、付款資訊以及其他必要的KYC和AML資訊。我們也會收集使用我們服務時產生的技術資訊。
                </p>
                
                <h4 className="font-bold mb-2">2. 資訊使用</h4>
                <p className="mb-4">
                  我們使用收集的資訊來提供、維護和改進我們的服務，處理交易，與您溝通，以及確保合規性。
                </p>
                
                <h4 className="font-bold mb-2">3. 資訊共享</h4>
                <p className="mb-4">
                  我們不會出售您的個人資訊。我們可能與服務提供商、商業合作夥伴和法律部門共享資訊，以支持我們的業務運營。
                </p>
                
                <h4 className="font-bold mb-2">4. 安全</h4>
                <p className="mb-4">
                  我們採取合理的措施來保護您的個人資訊，但請注意，沒有任何資料傳輸或存儲系統是100%安全的。
                </p>
                
                <h4 className="font-bold mb-2">5. 您的權利</h4>
                <p className="mb-4">
                  您有權訪問、更正或刪除您的個人資訊。請聯繫我們的支持團隊以行使這些權利。
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500"
                >
                  我已閱讀並同意
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;