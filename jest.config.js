module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
      // "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(png|jpg|jpeg|gif|svg)$": "identity-obj-proxy",
      '^swiper/react$': '<rootDir>/__mocks__/swiper/react.js',
      '^swiper/modules$': '<rootDir>/__mocks__/swiper/modules.js',
      '^swiper/css$': '<rootDir>/__mocks__/swiper/css.js',
      '^swiper/css/navigation$': '<rootDir>/__mocks__/swiper/css.js',
      '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    }
};