let changeFlag = true;

export default {
  namespace: 'home',

  state: {
    screenHeight: 0,
    currentScrollTop: 0,
    scrollOverAScreen: false,
  },

  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {
        if (pathname === '/home') {
          const w = window;
          const { body, documentElement } = document;
          const screenHeight = body.clientHeight || documentElement.clientHeight;
          dispatch({ type: 'setState', payload: { screenHeight } });

          w.onscroll = () => {
            const currentScrollTop =
              w.pageYOffset ||
              w.scrollY ||
              body.scrollTop ||
              documentElement.scrollTop;
              console.log(w.pageYOffset, w.scrollY, body.scrollTop, documentElement.scrollTop);
            
            if (currentScrollTop < screenHeight) {
              if (!changeFlag) {
                changeFlag = true;
                dispatch({ type: 'setState', payload: { scrollOverAScreen: false } });
              }
              dispatch({ type: 'setState', payload: { currentScrollTop } });
            } else {
              /* eslint-disable no-lonely-if */
              if (changeFlag) {
                changeFlag = false;
                dispatch({ type: 'setState', payload: { scrollOverAScreen: true } });
              }
            }
          }
        }
      });
    },
  },

  effects: {},

  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
