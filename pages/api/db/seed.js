import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const images = [
        {
          url: "https://previews.dropbox.com/p/thumb/ABcFtJkhNhn5trFjCRezdTTf6rKv90ufvpk5wZ5WI5O_Gqxf8s-xmIUX8ekrSb6kkQBVtSV5MVPGMIdxZGouj4b6iO3slpdLkUlmkl8ewdh7iQcQeRr3D8zdxduS7DKJO2k2JeEj_MZqvdwCplByHjwfQz1cl51RpbhMM_RvTuxP4MKHIruWpUyC4camGHM2-OEtOgZzxEMdHPmEUDnSy-Nvdx0Vfe8AN89Boy6h3hPxW2uEicq2YQ1f-ClYAv78gizflmS6-sA1HnCWP3oqZ_FkKsiIyOjcRPrG1iY-KC2ZL3W--jzufnl9GZskyGMO-CJKVt5Ps_ht3Pk9T3_s7LDtr3JkPbyImws7FYZE7WpZ8A/p.jpeg",
          alt: "terrace with a view Los Angeles",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdGm1RKKi6Az2ZBXoeVRlPWobyEv4kHyTE77izNGa23ZL47ubgwLVTERktUmyrzLDo8Mz213ZoJUlm9XT0BNhNZFsaG4O-otwrxHiMhu5BDkI2B-sbwCWI8cavEBf816llxrvPbuu6LY9O7AtEhnAySrHkQwA6hgcuFtoP3FNCmn4VuCMeGZrh120oLZCnAvign7-AuQkKigiF6rPgJyuzVVeKAADkytVCxuqqOLBlrTDiDH5T0C-SzznTx8yR3KEU9HzAPUU40dhbt2EXGEeeU0CHEEjI7F-yfWmaLAbTXwYILY8XLoF4wo3DnYZYQEHjZzx3HwQCuf_BATWkAErnYpaG5HztncOOEfbaSrVwpvA/p.jpeg",
          alt: "Residential Lobby",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABc4JB75nZQ_tm3fA43NtkRQtpSgYqRxyztO5rHgTzepdx6XjjsmCf_5EKJufugrs9GFY3sNXIg2C20IHPwKIRdw6raY0VQfqJHt_WOmS_lHmWe-aCsorKJVhDak2Vds1O2OrVecXIElMSgheNnWToRAKMXoSUZ4nXnBYIzuzvnptkgW7fYj2opMUI8IrUD0yQp1RmWXcglcXD7hvViICXfiWu-8yWcSe6rqtuQEfrtiu9WFeTG9xmFWBCOGAj0293_Ok90Yd8r8kNk1cwpom6cR0DnPDya_Jtt3xO8H8tpZRPsrjLQEEv0HBr6vyXIqPUL-gT-eYIhRLzeiX_XbN6n_Xe7cmA4ocCD-02dliVqMyA/p.jpeg",
          alt: "Residential Kitchen",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABduQfrUOIi6Gp2Me3pkReiJw9147lV5gamHxjsfnVM0Rlx3-o_mxw9x3bcjdkjG7FfgcpIGtJk5ioYwe428heqnCOk8rGDMtbGHWRWidMoblGDhTrnK-Mez8VWStC11JuMW9Mee2wQb1b1IyMtDUzwu3FBeFBL516C0WKL_z5onldDvVf65VI2zY7aqBDGHuEPHTaPLZjSW6K8PTnrcIFvtVB0MQnlU9JgGyiACYrtmFQ54UJORFoIptlm4Ab9O67kN8ATQq8r35l3x9MGP3O3ymqROKnS9mD3Pks66pZV3WfqisrswaQE6o956fBaG-TcCX8_xrlN4U_OCIPEd7ecJRp-sVlM5MFPjcOnheVbtoA/p.jpeg",
          alt: "Apartment with skyline view",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABcvd05ei9MUA8D2GadXJSuP1BGs-NooRopCJaEeFepXN3z4DSdKulyX5Zb4mj2wQ5Nu-GEp0aIMsVnkl5eiSMwtJSHfSeOFe4W_uzWPaxA_lnTpc5O9NDceWc8lkqR51MtrykoYsDEpoTyOYljrKntxjs6s19QYIHtewxDWM-PkBmzy9vi9l_uLeHRS4-c2fBjrv80UpBfj_Dyaar5_QPRAmsHCokGkMtx7OO2Hk92To5uYC2_V-IoKi9IHEo3-iWdq8joHlhDtLZgJYTAlRBcX-RoowYS_L68-2gqn7VqGqTZX-6CXKn2p7k1cGO7FubEbb8-wO40294tCbkzH43JY5ExT7qKdDZ9NaYrFjGK_jA/p.jpeg",
          alt: "Cookbook Store Facade",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdcqa6-FmSVdF1D_WH6aHFFYIsqJaXgq37ATug5l97mXsdrWP7-lXDctcRrWEBrp3dd8ZZOa2zPrrkXZAl9p7JW-UfGkFgJB9CyQ_nv-3fYVIX0_A4AlADiszFfT2n5yNoHeMA77MoZs7Pxj47_FmC5KvSrUz1Fco5j-CZD5jTkDCNIcJNfPTnlNfRb9EyGVhxB3FJuaWJemRlGlDgYm_5CTMFAGG4oLs-jx5WZL4QnSSEW3kScmtg8oCxfRsIh588etDTBj3q9PTZLG0xhzzJNgCHagq1xj6vBM72d8Y5l7-tsiwkFhF6S13gwkoq_nvMSCm6c69w3CczRk6rRwVCEMNd_LhCZHaYAX0C_NV9qLA/p.jpeg",
          alt: "Cookbook Store Interior",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABe6aX8JxcSq8uT71aLqK8NS6pQBYXbdWFfxfAaA2z57w9lyZkWUlBEd-xNvIGC8nC5wtl_JSfVojhA7JvUiUW10qRwB4XGcwvqjOCadh5mE1xkEEXdyoPrBUffLlxxi8zuMj_QAMhWeXjySQF1atAnfDr8ojuN4lzljKOy0DBF6YS5nFz9WBaeSRQ__KM0kCwrBSBP12fM_60PQRlhVFj4VCtHEkSqLxKz7-tisJUV5yGIs8hyGaGZvtEF2_OvG9XR5Yr4L1A0mOxVptr_nTTw64-nlcO8r5kgE6Koux5mhvxO404Rq-aKp9OyAXdYU608ALfby3X5DkvpuhG06tKiE5Ir4rPJeaQfZQ7VgJ0h7hg/p.jpeg",
          alt: "Cookbook Store Fruit Stand",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdOBkSdzsbWvSrsba66cGkBx20PS5YrvJqi0si8sxLIUMgT2r2xw3a-eAx4qNuGPooE-lchGFnpilQyGXgvEdewcMSVJyKYVN7GB-wKIhJdTOW9O4NX3uDbXFe6LKI0Q-yPVviZCEokH3tMIKEwh4OGqWgdqxtmG652Ydu7DQkK9HHyl91uJZHaEa7Ne19VT6iSQsj-Rsq53wewpgxN-CeAbn60wud0ov7AeIgdp5lcdohHv6xKcmRrNDlCfrh_dujs7iaTdaRNBif2Y2u6SBdUt6EZpVAmAip_XnVsGet-mhALhifaAOtVuzLon5gNGvssX3ePzHX598HZP4VqkN35IBSLMmLn9aOiLcCt_Wowfg/p.jpeg",
          alt: "Residential Living Room",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABcSNR02YLxMVr5kXpjRx9QugiiZJWDUybYGAig1dxncqx5aLScnDKUqgZe1byv0l3bg7vtQSxgkviwTpR4cnwk-qbP84pP3haRPjjbq2EUjUbQLUn2aK2FZAAkcxrJuuQzWbCYG_0hilq8TucLgzvY4DicsTojhlcg1wY-XdKIhdTWETgwz1Yba20C6Q85AIkXqyBnCraVN1CO2r3SCWTCl2mS9b2BxIagjSOV-YGU-y_DIj3L637EF2MczN5RSRq7yn4Jn9hWKuSUTEGzsL6NrBY4psF58k8tZzdSaaj0MkMMZ5XnBV173d_IbYkFLakRmqkZn4ObiLV8if24kRaGOZfSIE0dvzGkyS5l-EH6lEg/p.jpeg",
          alt: "Sunny Dining Room And Patio",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABd9f7B1pK9AtT0mCWNKZCYR1aiNYfnvhuCzaCLD1XiJmcv9da_GJAE7ctigZNPxA83l7A-NvmDPE14haMMxMYPYa6kAoA13rvailLUa-XCvdacElVxeqMdSkMjrY64IwWsJYOSVVzmVJzg6MFkYgB9t1opwOgorjEvJevcR_1EtJbkQ8oqOJgcfBbGi21grqcNIr5AY8GtmptUtrW1PbglOgXK_O5d5KuRYtgTZjKaygEWcwQUMQWwQMhsYWUdBudRBgQhFtrxjiFWeplz-ik6qVjRnjqeZIVgnQDRT7wx1-QncLOvPJw-AvIOA6hN-sv2Bqf2k_brQ4PDnLvjLgPSQNUOwpn4RU-py_xUAMauynA/p.jpeg",
          alt: "Residential Bedroom",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABf_6cfR9Rv79Pq4D3EMydO_kkdryI4A6zY1qN6tMdXF6lCMFrX8avqn9kpVWYi2c8Oldi0SUt3SOr6msmi7YzoMsGPkc1OJnhs8v_OhWYwR7PqGTH5Bay7bzcfxN0PIad4uoTOgGPF4MEP9gr-2Zy2b1brIBrVzFyhirptix4la9u0bBmlbSKul3TLlhoeH-xOpG5pVC3Lo98GVCyJ054YmMrl9VKzUOWr8AbGLAdzfDbfYMTIXSjIcHbm0oIMjTfFxET4CkD6gasdeJSsblPhgqBm7_FVLLb2ZsGRB2aBsUbtXV5HkQETzu3hy2ic1AH7ooLCjbDzYv9mUFYV1_5CX_U7HT5NRORLgyF5SKzkc5w/p.jpeg",
          alt: "Kitchen Leading Into Bedroom",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABeJx4KxOCPVdQ120RApx7zm645_4tOJI91tQYrdx-aBc6kTNS7Huwx6-ON-7p9KCAOS6DQCyvbJvXH63tqRtrIMSPSAxEWmCiDOJ1oGiPN4_szKIPzkKF-UL8E1sj0Jxu82UzSyeNCe1NXWwo98KH-wfc7yFtxJMvQaQRF6HSbLLfPnVYTGJIBxzoUC98oDGDZgxqqLtxlX7uGiMDZyG8habRQRvCQXEF0U_ZzFzOaazTQOQwARu58W6bExilyLgx7xeoErN0Bl0D2IF6ebn7TZaQFk7NzCsgzfEC37YsAOd6fN8oo2N88hSvj5jkupa71sN9_SPs1bp_v_j1_u-d1N5g_aMwNxrkUxa5Db13WfCH9dG2wC06JA2kiP9CbMNLZWPBb9JjQRppC73aPUWzirhEJAaUiPxXB9ipCTFSj-eg/p.jpeg",
          alt: "Moon House Resteraunt",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABcReikKQIrhKy2rIWiHYO5JruAB7yK-IqjGA2A6L2awAeujzsvr6awlyw1MQoB9dvaZiXA8-RqxNppSxPacoDGLhAwJyqOlbvVRqDaDeCA452pS3jtOonnpvxDb_pCQEEYdrtqhy306EnklUqNplJnttqGqIru8nkNfY8GCesu3fnc9yHnSF1Bqp570FjQmWpvrW3StnN-3wRL1iKAankBo9eyZARZ8QNcUndE-4J48FjYzXOrwsu55ZDlVNLJd-KjaEPe2m9Va34Yg5EfNEz-WVuzWv-wy9kIf-rcijvRk2iKHJN8QxhZfrey7Y6aFcvLvFXfnpZqUSSbcxW9FYwO5Iw2yhQ6w0t-XLmK8o58LGw/p.jpeg",
          alt: "Facade Of Commercial Office Building",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABfr6cTBl0gQmVzXdte3slRlO8gIBB08anZpehDuoRZYqKrDFg1L8ZIZjL6Efkp7-ofb0d_6rEwkp834FnyX04WKRnTeFSWhQ0vS3No9ttUotrOV5k0JHk8ldZCwCS4cGYV8XTals5dEg_lUSSOwxNp1FPEINlstr9bcHqrtdmKNfl0H3c_mPXRcPkMh07FhlDr8UHiN8fMYJuYouRzkhshbEIYgp3KqRwy4uc9x9mTx0cutPY_vRoYMMPBw6b3LLhjBwq26T1fmj7jFrBS3FVmXScOdNkHd9-3Zw2qe9ugoW8eyOp_uyEsEwk4oQuVI7cz9HQn_JO83COQ3bc2cwg_VnSqCgIkgl0MXWvx-NbqHqH_8ir-SUgjNPmIGTvX4qSVcl-KjoPL5NkP-HOvS1qibM8hpXzizlUJsh9932y9dsA/p.jpeg",
          alt: "Arial image of Office Building",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABcqhcuuA5JPilopFl3ElN0IB0xxlQgrT9QM_rwglcybAGldN8bwlhkIdKKfizt7569l8zYhkgaBSOeAYGkA2c0nb4fCF6-m8R1bZ6PyYFRcc_AKdjVpj7Qxa4xurpqpXDWGCdcQnmyi3PwZoisEMFoTw1flWUCJtE2-W-tXW4ynYlIZweSam40PTPeIqnJGIjiTd7iz-Ij7pOOL9ZnDVonFa5bXM0yLerHbyzLQDN_FXBnTPMFtgjH9RISqXINTeVktf6nwoojEAIZmJ8IFJddt0eqT1u90Mi4MJbL5ib9-Y0OZS4QqQiigr1fDp8i9yuFQeVKsmXueoa4M2WvSxVJklGF9izDgwwNtKXIlC1q7yjgQ7KTVA75BKG4-EoA8cItgsFlmFOJKSVlfUj9xExMGkcl8wXUfv9ZIFFjCjxrR-A/p.jpeg",
          alt: "image of Office Building Facade",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABflSSR-n7mrgNd8W1r8jy21DVX3nHI_jfF5BHnGC3z_kwL2OLFs-jHIUXq_rS6qT7nEK57Ma-2mmggSGSHtO_H4JmOLzjRLsX0YzWiu4bwav_xDOSF7yOSdHnyJPmOq-fJ1vCuIYZWgS6AhQKQTxp0i1NVR7eELKf1IjgiNjq7fBzv_4k-tQ293Ykezx5f5nRwJXmofMuyaBlADNGIShWQLRDYsEDkMYNwRNyNnLDc4Fp2rUjb2mu7WtLwpjnuf6UqmA_jluzsq6F72Nave7vvtrZ9m3fLVnQCUWVzQW4Uch0fiYW2lKPNxCHS6qMoRzarC8pUnoWTsDiEiem2J9bSwwyJl_q3CWL87YfcSSulkCA/p.jpeg",
          alt: "image of Commercial Building",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABejxjIB0KrmD_6LxnuIONJQwv-vwSZowKbl81-nYQ3Lyg22i2vuucalqVpV9geg_8eKqfh8dnmbUiiqmTQ72iuCQXPFHKZkwCj0bQLKWUNfCoENGaXAhIcU1wPNlR_JVAWqEf_IjYZDAICiYxJkOaaqqRcbUY10IWH8ucBqePn7UdH8jWuTuknhwFJ0D00U2oADU87nzd2h9XIk4lMEB_rF4r4hQG-mnkrYm9_7Z-sOVDSe-AvNS5C5ACKM71g5p-LJXUX5qimLxxXUPlnRraLK7_JiV8HPV8_LB0FY_leJpAZMVvfqbMkohxMLubauoLzorFJrwNWPCy8GLQ90GoJ7IpvnRs9-z9e11GvKo2u2sg/p.jpeg",
          alt: "San Diego Home",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABd9Pou8P5ztCFVRRCcYirGpQtjFN_8HPdlNUh_KkhBiyfSNYne0h-JuV6oa_E85FPAxE34aS0U8K7ZcptMYjTkglil3Eha-bFoMuRUREz6ScjMXX9WX29t897rtEMEQYdqouKYyq8ZS-sIYAgRAxnTMfmXdzGIpaa1CzSnkzoPbP7zI7ft7bYzgjtEEkpjmWHr5PHwAa9jEze1GQbQketcLf3O4rpgAZh5s3BpQDya2qEeLJiiZWgZIxqQ0UFfWNryHvbOMkMlwSR0_CaIIimWAXCFT1FK1YnZo4YcefSoltQIydcG2gg151OR9CG_Xy5ChhkSIxBAfoBlwOeEFtYh08-0uo3iZD3jcwEZaqqtk8Q/p.jpeg",
          alt: "San Diego Home Ariel View",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdv-m3nlxKKj1h0NQpHEycSHdMKCEjHlS5T_OLveXeF7vej0xYSQAqGtOtEtQatf--5yy9nh8pFoVmhpQpqc5dQOF9ETqz3eeeApXakC9FeI8vRGv7bXx6eA2aBMRwons0enVXaYKl_xJXcFMKZhgompHZD2zAS8fupKKoy_bnfpoeMdA08WsFyPGF-FK_WrKWqseZRJSbREP_4AOVmp7PS5JZ4kRHPl-ThQf2eHzWbNUO73QR8SQAR8E9rPY4_52ebu6RPN7b5N006bCm5HmXJ42IuNlWQUyFLsR5XofM7qUnwpNORIUwmHq9ah9jlT9Aa2F7sH_B2Uy3cWzVKFy-pPlCZx6zGVqmwt8qlU9iRwA/p.jpeg",
          alt: "San Diego Home Garden View",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABfbXPHm_qtNHg8Q0nAlRNlexJdZHdGXOXze1ZYV3H1sWiKCIHdb3zO7Op3RrsGl3oluEmo5b-o9oHn35RdugoWGjPfX8FSSrP84SegIOOqoCfUmVjE7slp9Ci0wbO5oSkKJt3A0kOibi9J1r_D6FZWCeByidyPpWmRI_D5qCzHkE8ZskPmlxViLFHieXvhdKaESfZDH5TZ_hbVLjAd9-atAk6vv3WCrHzt8NKcKXwj00odtlPJispyTslG2ClPiVGyoza7EISLWdUYFoLftAOuRGwmbbdK0cRiGA2Pu0H5oW3dtGqWtALr7WgtpbMoc9Q4JFUIDABwewXknyauoR_FUVfJ-3zDQCdQyoegVFNSMTw/p.jpeg",
          alt: "Kitchen and Dining Room of Residential Home",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABfA_Y0FAvdDfXmgbMNv1xm6FnnXIGnQ2KY7v6082Vyvhor6YMd-dSTOYftQZbno-aph2N4w4lBhJAEgFLuOlqd5PNtSPAAwVPibkVH4YTW2xKlkL_r1bvJ6m8b9lkw8w-MvCD_wbBxsNojk7yAiXLRf3C8PcgSJ7g7_euLTu0h2sgj4rf94PFQU8WLpMP8dPGkfap0SNTs-ntNbR5cHu1JQ_rXLF_azdO0jtwHIKStGhR2ZHfBbi2qTAt-n0vzNsXGK6CKk9tJJSSkNd6_8J7ZctMN6kFLftXq3_NnSZSD13OAWYIb0orCbBFO_YWUCnMEQ7MYrAkiSa2-tBV-IJbBz8Gj1bqjyUdSujurjZLCVfA/p.jpeg",
          alt: "Sunlit Guest Room",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABePh1PhF4tpAkQP9pqbroD3lrDi8A8JSXbA7zdyuNeShJggWBmA4B7s0ADyjQk50GBwk9-kmvkgrH8PszKVPd_mK4eN1WdiKXpUKiYw3n8maIPO19j0Poo-1UxjxYQRypQ_irn2VUbSNrjT3eW0d97QQ-7DRk7jCv_yOOpOeuS60g4af9tMZUHiY16sDc8G9r_S2F84Q_SWCQiWx5rrxF_YgYng6CInGYm1zFJjelHL6TNgamG6LePSnDsgx5347AD5lDLXvRHMkkR1-b6ToUDs5ASA7gu04AbFc0-N2HDIM5tga6BVyncIA25u22uGgMjd77FRUFpyeYc6c1tw4zzAlrL6CaLE7ZuyynmSxQPntQ/p.jpeg",
          alt: "Residential Front Patio",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABftAvRyjfhFskntPsbpskZxFnrUcommReolK3PoMH1AQle5HqHO17bpzoq5mECgygPywm3d2ONJUZwDEETbcGfwxW54YtjnxfCzmCWhev4dFiSXMrTotrfwvw8zAlGSwHz8nWd5wVLz7RGjL_JQBX_pNnlbwD40P8pSP5VPY7gQuK780Oq2Zwu396NPSHgcNVL-FGqmlCeDMBubfOTh1Dt-V90TPopbT7ZMBgPFeMrVS7HVMFWtsIFflfnT1o6fr8KtD4QfD4_bjjAHGk8_08oCrFRRYjrASefjDUwJefWzs7vUJfdfFzerJODL2UGN7_Zh7OodHGAv0qTm5UF3Or6WZCDvEMFp5XFm-4t1M9xURw/p.jpeg",
          alt: "Residential Home With Swimming Pool",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdy4EpkSv3PFfiWQ_YAlp8Q2tiXoyKKGPukyuZ8fp7GZMxxh7_ENoMml-jqpzuHbdwi_DzI7jzzHrfoy16zD9oLewX0IrH-jNOJM3SyO3FTyDjLBzJMN62lrgmnPjrYFVOKv6buNLfup0UiHCLRYnFsv8p2vUFf1CiE7wR-KALMlxyjSROGYrYpXTmkrDjwbQvjHcpV0iqhlsi1uhz20_4Q4h9eUn_v8_y77h8OtSYlfzY8YbWPx_lVTzkm_gMOpXK3XLSsvvWqgqMQr6D1mXc4Bc-2hWLk5I0L9JzN1D9IQv73zrV62cmmavkgRfYuutyiXVOfjFQNAVwmt0xkt6WVJT2ZKvA9NMLhBZ8bnL5yCw/p.jpeg",
          alt: "Residential Home Arial View",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdC3BVZ_gGhcKhkKhqnJM5Ex-vtO-ll3fkTymucSBFOKtOMZCekXb5vlhHY6q-lGOREK503NhlfFlAa05D27XqEAhfPuVfUIc8RdOLXunnztj2FTASf3eXH0fbPi_WU3DkoN6PINjyqAzfi3_cLX-oN3oahY8I00BKYUDDuh8qfJAbZaGlWk57WAM9jHjwB6-3aWCQd8pVNrkEimMnKnWq8whC0n02vpBmgaVFGuU565z0T1kcl4URQSnMf9RCNrZ5uyIq8KZOeeTiAe_sCn2sFSmYrKg9Ilh1A7eQoO4CeM3ekVR2qQT2nfORq8XXiJdP0_x_4XTwF4EfvWcZpGcV8Td7cXRDRKa8fsAOezqZvLA/p.jpeg",
          alt: "Sunlit Residential Living Room",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdC3BVZ_gGhcKhkKhqnJM5Ex-vtO-ll3fkTymucSBFOKtOMZCekXb5vlhHY6q-lGOREK503NhlfFlAa05D27XqEAhfPuVfUIc8RdOLXunnztj2FTASf3eXH0fbPi_WU3DkoN6PINjyqAzfi3_cLX-oN3oahY8I00BKYUDDuh8qfJAbZaGlWk57WAM9jHjwB6-3aWCQd8pVNrkEimMnKnWq8whC0n02vpBmgaVFGuU565z0T1kcl4URQSnMf9RCNrZ5uyIq8KZOeeTiAe_sCn2sFSmYrKg9Ilh1A7eQoO4CeM3ekVR2qQT2nfORq8XXiJdP0_x_4XTwF4EfvWcZpGcV8Td7cXRDRKa8fsAOezqZvLA/p.jpeg",
          alt: "Sunlit Residential Living Room",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdV_f47QRj_W9YZQobaHZFmZ6vsxTUTCfApIzMYbmlv_7w7lWhgXg3r52zBSblCmAY7iCP0G4g2B2CMbXnGlFOyo2Tn9F95zezUziwEU-D6K39R5McdSqCb3RUe12FBh_3p1jL6bwEiWJkEk_WENZJ6NES9gLUjeLCP5L63gmCK3qVNJrGP28YKhzSTGQf9HoZDUOPL0q-jpx7ONKekDHTK3Cyj14XX34I9WVba2JdPvxTBwKfgM7MNPqk7LFC_NRgaZCfSd3FVMlBzkRTn4faT-I3Ffa3hSStAQ2nEsa2FrFrFJvnferRcckcKqYeS_FVc5dQJOVf4daYf9VNuX3HxsI8ixn2wcX7jb6jAIf3cwQ/p.jpeg",
          alt: "Arial View of Residential Home Roof",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABd0O6-Q1w-51iZA09Pbr3-8XLRedse1fjMoc0haTTEPXCrA7qKOkmlOIf_lZZjh9MzhpSw70SG1UGiMIenojuCNVaftWZK3sB-t2aOQSGrynd9oTHZP7s6jADxz97s8vYhW281nk2jpIHsyJ7K2CtgR5QaPsYNMeQHWfFqFdZl96mGXZ4bqc8g5E5IaDTDI-xPRVNUeA2GR-FW_XVkDFaRCqX0wQAoDsHX6LKa8Wz9cxUPbDCGR27NX4N7yT8kZ0svPUFIpRVGMRibaPhi5ypqGUqFft1czWYhDYS5AD_sKPfsqObe9QUrQiZhcqZie7FRxHY6i93TghK8jsxyzN9uSjSX2x69mvxkp7gyB1Fn14g/p.jpeg",
          alt: "Arial View of Residential With Garden",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABcYleEf2qlGCaPPNhaH00_pxMOrqiGLMk2tZNr0ofJI1WIB54OLj_7KMBVVrAw5upnWGHXKuTjrouVxomxX9mUFLlcCxzeGh73RfvHX5WyCb1cC8C15tQqqINavaL-9eUtZVOEXF_N65A5VJBPWJOImL1eIRGMQD7tjU1qWJk8_cDad2YcJIhKvfrSSTS0ayhw035GjhWNPkSk_-_y4Kcy9mz8kR1q9DJlZE9x4fuQ_fomJxXjhwdEal9AfXQUpx5vFpukbrjXl8_vtlLepbWrG5fEGeR3hsVBXxwx6zHF_TEihxzdc1-hfl1jAr_M5VVn-MiAUx_nVi5m2_1MErRsCIUSPayueHzxTv8JU2iUxZg/p.jpeg",
          alt: "Living Room With Mountain View",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABeF3SDYJAFYwNH3iYv65tyaXMLgT__yKvwI9NC8n9xwYdEhlqpAsaHTt90K9WQeG70XjOq_1iIYA9UyM-j0J_xOL5YqNkVgztpHys8S09MvBAHTjUYVyfLwjDY7XOVQWmyqglkrtY-jUw0oqvo7G6E9l1Lwtsrypx7g7Gn-gBQFikGCehpu3mW_ebfImqz9sCInopSrtrLlNOwyeMVleI5CKiXL2Za7S7IyXbbL0iFllpfCznGv0ccNYIGf5IgDb6qbTx94UczFC09Nsmorlbo49NJmiOlO4jdp_ePMucauYkR73U5mw-66BOyUiq9eK9NKbQSYB82GdfHKbp5H3L_iG3O-HWXBa0jAIru1sF88VQ/p.jpeg",
          alt: "Living Room With Mountain View",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABecNfpGPF0zPEZpT_4c2iyEr9B6bcr2-sGrlJpRhQaKVhoAFnYfX4n1iHjphs3g36Q9vu2spjBQapEK4N7GHUKzy0POmW1xjlpLu_asp-JkoIX4JaPpuVqj4RG0-vLMKgloW6PtY7FI_33kvyJPO50eLz0kL8XG6x8rLHVvEgDd-I52rvXudEvvO1yCzlX6jUeizaEMXtnnNPbtDJdrVK28GLcyDCNxuwK1DxwZ_hhoS6XJAqWRQQkklNUzYmhLsg11MLsU3eR-OTXSjzJ9m3l4-p7HVVTcqv8GxsoUWz0qntiK8COCuyDfVuxnMev3jtAKE0tCfx84mYVR-e7-WmmNjR5wO9SFqHemfLqlCLjiCA/p.jpeg",
          alt: "Kitchen",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABeW7dRgHAbM8YtlvkH2MUjEofoiNrPS6ezhDPM3IEHthhVYd3Hz9wwaxgjlm0DCdqhY9exbIt03i0HA5oSz2ligev3aQrYBlHL5sxymRLOgroKj0tcHDKvA5nZg7zgIi0KHjK-UohZRy1djpu8Y4_1AgSF1YgGb0e-tW2F-2HXPIqICVqyzqiNcSht2_rZ_ETxBoHDibtXi0MVOG7tGfLn0fKGz0m5GR3f5pqBhi2X8lTjc5LJVnN3hgF1mlJ45LnAP66-V1HKsbW8HJXU_dI6g_EYuYjKUBrkDYyG5fV9i8hStgBgbbLlUNgr9sNWre3SQzVsG75wGAd_VyM016kuREwelWrgXn-8eCPh2JQq95A/p.jpeg",
          alt: "Residential Home With Lawn",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABfe4SX9NetMN7HlruM32y-QH9hBUBKineEqN7S1YGYsRLoQwrrvBf9WsfPmx4yMtyQ58SXGa7QWvYX4fPB8EqpFkNiGtcyA87E9Xr2NTM85Ui-5N4FpxXoQatCFoSg9p5FEPz-RgsK2THViH7vYcubrceZViLmiuoDMMfCQbb8NUvdLTbZbvsTAOXVG-ag17B-T4OZie1mFgi9oLr_u_YAVHXVygFszyTefO7fkkjfmf1ICKjByU1JaNa4M389rCD5L5BifB8nw6F_zY3cZPUcVrbKLQ6DF27scKBTzbnXL__1wVu-T8CIJxwpXaWDfnC4vMOXaAoQdl_G_O7Ig0fMqGHUUsjr8Fibz3wWQSRXupA/p.jpeg",
          alt: "Residential Home With Lawn and Flag",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdVhs3v0s6U9uooAqAxUg_4FdW-D_4hlqvYd4WcByZlK5O2gG5ILTETSWWWXVDNEnU27OccFYFAczJLymSmbGJnrBGhs786KSI_duMxEpzE-2KnGVWmJ7Mz2i_mrRpG9G-3NSDLVe69w32LIQev3wncxiS5-B7ZKBAecWNkbB3F4NKZpDuXc-b3RyBD1_NCAOmeSt4GH427-TMTEFyQGRkfqKae2QuxCc5yfAtOviW3tP4W-hRQ0_X3kIK2iycPyobzZevYqhmwbu-hio9VsBKNZpo8Ej3FS6qIE3m1OYQhfjqGuw3PzI3tXYTgVXn4O-cstXk2_JQwkB_RznG5dz-bauh3q2hRijj2Uy3xN665dg/p.jpeg",
          alt: "Bathroom",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABfnM9HeJ_1G9UB4FQiGEiiF11uVqZUSjQTNIgXbokRzz3bDstXrJMti7IqMXfoPwKYFkK4vBbX5zUD-z7KPj_yZ2NfjM-7i6wJgD_skg3NBoGbZsmSM7JRDy-5LU9tORKIyMPRKYRJRhH4lrVmkftflKjLgb9ksLvTFEHkgHlTEE1HC32yoW9QoZa6nW1u1u_FYmMsXF6FpCCYTbeJNiqQDilWXYA8H_p9chF8lH64njVWajL7Tib-yvdGsT7MGA1QJbiyR9cM0DJNxQmPMzobJJw45gdzLj9GKhca6SBSRuGbnh8_qQ0tbPAxrQYIgv0WQ104lFPZXel1Lvaot9eFrs7IJ9lmMadWX6tB_evNkFA/p.jpeg",
          alt: "Bedroom",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdL8WZLX0ZurR_EVF5KzLaB8IuYNGmqecPn6m6jhvSVoNtcVm3a0yOIlIEZdvSpLajNLsUdT6r1io57NiibMGqxMrafJzrQL1fBYB0WjC-jq_tT1A3ArujB_iyvGgWQfyFZKckNs4E6_UyfdqjEn7rrbqjH_UhdpWMqg6FX0NAZHzx-Ehg0PFXWa-U4BCf5QrCa7Ekp1wBieA7r69WiU6DUp5bRFB5EcXFpDWtu9StilUqI5NL7sF0GX-bCxd9tcZ_mA7dcaUey8LBnHnBeeVI7v5U-QGtHpVeR1fTCxd-TimOlQvFmRfk74J4lk2HEu2_QIAnKQ7LUj55c_vnCd_-gHNJ1pwkJBhYx5XA5iy3HHA/p.jpeg",
          alt: "Kitchen",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABeSG-VF16c2thmGWDLK5G18vky5h-l4HbrQYZAeBgu3yW1991Ej91mOdZdxJonrQ-HWhI159R9umYw2nIc_uCYXAfLEdkS4D5E4UuyGAV_Y-BwzZXQQcqY3NB4oSmSorPgTjtVp4l6c2sri3-tMbhj3xn-DR4ICuOQ4TOXix7MVOB0fBYmzPtZKps1ipb-dZe9z_YcPFzz-yMly2T_RON9gLa08YX67ERKHMchGBfyUGH1DF7Uj1nguAQ-zYdlcSFEhiZbesEoc5Jjnn0bSIlQuv4b4zmLjpvCuIKBkmU5Vs3XkmervvDQlgmakmT9xLDcx-Qvep1Erc9enNKT9xFJIjBN7cn1qcvvCPKKlcWL1JA/p.jpeg",
          alt: "Bathroom",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABcMDzYxTPYQDL4dqm1DXGf77DpAU-8XsaBJdZDh0DhNEEx3yYyn4YsRhMwjONIC6rcrycfcKTiAaKYhP5MkdotSqwmT7FFMYhX1pMAYWLrIu6urYFMlRaStStyfqX0dGpBjyi0-E9zc_dnxyBYcG7SXkRXCgNDBIeX4ZMogGsG2Y027DUN7pieIWbu2pwxYTWR_jRignRU36KAUCHtTHvS7qk_-Pgs8L79ZU0duc-gXqMgEhzAffBFze-NJHZFnvrb5nRyhVMYyrkjo-M44hTV2o6X8DJ2l77dUZXUP6W7ywzyc4wu_xwIFJeSRa_KWIsO9Qax3LFLRM1yDvqeuP9qxWaxpzuXXg4ojUbW9y8H6XQ/p.jpeg",
          alt: "Empty Apartment With Skyline View",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABc1QsFyuCo8XuTx3rEixPQzVvEAUmUTUBMoxcYQSgY9f3hWa0Df6iPfdk1PEKrfogEGgTMFNKYvrhYwD5wAQLf9-vVcFxt0Nc-V8wiiOojwUIQz6umJRO0s1nWLCD7fxP6tPqdL7LUgDcfLFo0b6lzp5PpX4V41H4_dGXDBbOBcwzw_goF0ymdaHE5D88OXZsH48dWyAoBFhlDpRVOcSvufraXeFNFD584LLYiBk5xRws07fEz0Hez0hArWiJ1hr4htD3aUf9-j37T6nDkBIYayVotRUC3EWkc0fFIlUDkz9fclHD2I1v68yoeg53eUYGxp-nYKUfi0_R8d6iFI_bhu_Og27QCR7yPSHQXi6I5mMg/p.jpeg",
          alt: "Kitchen",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABe51TG9rpOtKFneGH8kmdZ5ykpEbRTX1jkzRWl4F9L_5K4FS2L0AHtkx4fWWfCq2hrySS0P1dv24m8OxFmTv9d3f9cq_3CqcdOug7FzuliY13U1ysR3bi13qTU6_XQkhNFz8casQfyReYAZ3-R0baOSZNH2Zrxo-tJSdgUvgpND0IX9OELRSXHbp01DZlN0xZ-5o26a71uSiN-aaFnDEq-94kUmBMGr3XQm5pK_OD0jlcfcjwOMhdrMNeW3Eo6CGdsqvb1YqarCjDLvnqweffNkkYi-6YiLzPXnCNqY6yONIIxO5grOlCTHTtPQV1HeUKL43nrwegAgkbQlm9pq6ss4RA90DWCHzi3hNR20OWzeOw/p.jpeg",
          alt: "Empty Apartment With Skyline View",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABd4cAEoOj7WjMEdy-9qdeNfoc6-C_ZxV0EAb9x1Xk116y0qkt5JkTzTbQfCu_hc7S2XWKSe4bre9qdE-7IQTPqenYFeIh9ALXaTonqlHzxGLJnsSlZtWX_IgtKpLm1U_k72OiN6lZm9P8fosRVEsWQHal6Zf3d_PxxwHO_r0_OYTG1X8risoS0Cy-PLt_OPYAmbtDlg36a5WPNQaW6tdHm_B8vBsy6teZD6c7pJqoJ9m5Xu-CQKuI0VfTvvmUMFBZW-3FouR8lb1Vzk5U5wkKQSKNl0piT-dTl9yMaJt0MLs3weCSBq7KQr4s_kz8zr1eiN9TUMD92rLWbtQAsTkN62wiGzgiE3pdVxEEMdbPcFaQ/p.jpeg",
          alt: "Bedroom With Skyline View",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABdzSByDU5fbMoOJ7vr8RyCPrhN6NCB2qkVpkWWt13NuvDLetLj6kZagDL8HQJ4Xk84wwR76sNFtKD6ydnjOfMinjxlTAudxvjsuQjNSwJfHRAY7J3-Fpe25KDPOE1C_t9ro9YnCxc7_VT9qsbmifotuYgDqfv7YKvqg2rUSLcE0-ZS_i6RQWAD0Na0GSCf8VCgC88kaTpcFXfTiHExqcMhEUJHPKQ9NnIoPDSQbS6y-8H9C4LmvTWHavGslze5oHCG0sSW38-ZOp87RnnIjMTZ5nZ3Hk96_CwOJ2SM7vNHZbxpPUVscNgqkgiCyZY1bumleRTIGaChKugCPZRSN6_AkdGm5OaSD8neXS5T0IWDSWg/p.jpeg",
          alt: "Skyline View of Apartment Building With Pool",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABfllTrHI3_UArWpwwlHiDFuN_AlubWZXfRe_3iMYY3kAWcCz5fz-mO0umvX-FUAxBqOoeNXCoH7j_2Mp8xPJ-b0ChgKBMZrT2kPWf-PXYSFbiMIc3QWnfXmydxpg0BVzKhW-w-NwAK_iSg4Mrry1SQ9xC6etW0BRxzGMEicUH70Rgp2rUQyK_Q3Z6F-Cb2ijXBP-N1y0A0Mw48k-fcT6-4ekn4KOSeI_eWxgovjsOt1mVw9U-3lePuKK0IQlP9ohsxMXwrP9o8juSDYh6IGmsiIJcbZQsfVqn7i-bazaGZKGRavH8t4XTO5UPWBpI7K-U3h1gHiyDK32gvsYlsX3lfF2yInKMFdvl3DEUmc-ZfA1A/p.jpeg",
          alt: "Skyline View of Apartment Building",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABf5zxD5XpLCxfYvywIGh7zLGLL__t6s1VB1qCkhr1s3z2_TNDG-cgG8JPVkazGRQXBm6Gem-EEsGAq4JE2hv9XWjkjSu1b-I8La8m2xDTZMkq_P_oQ90a8X3-9ZWx8PUVabaVJt9G7Lk09NeH-ccTvjN7oy5j9pQdImE4N1r44aS_rjE7tc29-CC7bYcPQYGOWWdFTKRiXTSi56SZhnRLgStu5cQqdkItHyFTct8-oPnYdK_VZSTG954GrMvb_5ZWj9SJ4aIn9SI5pTBEvqzbbtQjzDmE97EsPx2d7CJf0tZMyfrnLZ_ehoMEM7915mjNS5-jF4kgX8uLGq9OXmbFoFhn9fEeuJcVNL8Wu6ECmzKg/p.jpeg",
          alt: "view of art gallery breezeway",
        },

        {
          url: "https://uca8aacd4a14664c802ea8b685b5.previews.dropboxusercontent.com/p/thumb/ABfraGvKhz-V-2ikBIxLM9KpAVLo2-1us3OYAoU_mArsD2bxHPYWZqQSuJSmm1upZ5gfmdI6CEoAlpF03su2WuYUnfwjfpmlm5FR7WpIBlsExE7bZv5W5kFxXC_cUauXu031UwZ3i935l0VacCpiY_37sjBfyr_wNxmkcYnSponIyEW08K_ZGkf57nBlcjj4ToGo-nfZNHFXnwdxaGPCLWXl6cxpeeAs1wsfYvnLtDQmmqiHfGbJQJynqW8vlyarpDXyNs-c9ieqJxtIWHlvIUf5sBGuit60uICaklub4-GbIiwthaWK2uHSCnv--tnGE7Xzs9rLKB9hpW9S8YOTM-tAuUmuQMnvge8kvEHss4mxlmtHw5_IYR3IQD37r3xRN_o/p.jpeg",
          alt: "view of skyscrapers from ground",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABfVK6VwTjzWnKlSmphIfVThFwrONsuXQm2-DCXw0_fo3DeEK6Ne2tW4U4MaEJ9azziD8iHqg1-lZwc1DPrIzhgGL5wQCvdtxVcCSJwk0nwODMmnoLrtrmjSVyIX10LpndHQig3jCpDzfh0etnyOREMh-W5RJ4AiPKL9rJteKVnKna2LPYCUlr0qYaYKRfcDtjUM0WXUSPuZ5CpfBMT8cal6vk_cktDcDk1VZrFPkJ7NNvqtwPxzLKvq-rbJ7Oq1h7pm13zWFbv4IQP1UrlsAsIQiXoxcOSN9JIoVAlDv5f-o2w_KARRrT79VQ1aMN8ifBHCsju_JLc_SIWy1O2SX1clKle34m0NUJA3mJfpfETUsQ/p.jpeg",
          alt: "view of art gallery breezeway",
        },
        {
          url: "https://previews.dropbox.com/p/thumb/ABdX6QT1kFDWBi7GflHj9vAe2TFkrG7KGs-w0nl019wVvguwc4ans6QFke94NKUuwEjf2iH1aue9GguQ54Guetd2xKjau9IvV5Gol3tvU0ZVoDq2vJY8ZTYRf6sxoQgterFK52PAONHYC5zvwHNgxvD75vrf3dmfhVNgbP0ZMRYGy6w5zlSWyqP-tBIWaLvaTMrEgYpK-wpOF05xP_zV9zaxhPaMIRvVrpgbr6TxCe50Y-DRZduTuxRFWzKf0Y--a1K_QPcY9BLlGA5Wa_cG1OJmdM6zMmTzS5R7YUKeiXVcDGfDvQV50M8qdZykl-yLADlncMJZsEiYJTnDhFIlUEKNCsgIvop3uL_yT6uSL-FXqQGSRWsQK2t43UP0Zv3N85yQMqMED_25KLmwLIoy_c6kV_4H8ttQN40_ISLnHqUAEZNNVkK0kTaVO-YzvqshxHo/p.jpeg",
          alt: "image of Commercial Building Roof",
        },
        {
          url: "https://previews.dropbox.com/p/thumb/ABdmT6NUVp-9XgsJRM5NDMP2BBM6NlLNJQqM4HGBQMpzE-qCG6GJ8S-99eodlLVlCAavL-W7MLeVKFKy7BAX4Q4HQNDexDMddRFj5mQFj30rYh1mSHqiDOjmh0bY2oqxYNSPdlv9W-zVrey699TGQrVJ5985ikl7GRFOlNYeYNSPmh_NKGG27B47jMWblQ-gjiSLDbJb3XlEsl6xSdzn2mWKOWGSXHugKnzJduvlsw-JtgOG6qdNv-seO_HpdO6o-wUoMii3u8AZ1GBVuijaA_0FuTNw4xsjMM8lS-Wvv74cJ9IQctcDd7eehKGIt3LXHPD4Z88vIGmlB_GDFxxd1B8IdA9rUzavEs_ECRy9ri3Qb0sZVokOqFL0k6jHdthpX7pnCPr8njEfg4PYn9L6q0zQoj03t7mozlYB175yy7eAOQ/p.jpeg",
          alt: "image of Office Building Roof",
        },

        {
          url: "https://previews.dropbox.com/p/thumb/ABelgrgYQJG1s7oPefj-A4dju75gfsLbNGondDmvtv8sD9Wo6Um4FDBoHpuGgGZmrRhuyUJeIADtrRW3YXFJrwIZaCWqYxuIJQhse0QV6WizKiVxk664S6UOCNKYIVJe8e4-gcSUG0Go61F-XYJLqGW_PBKSj_Qjh8zPbbEZnPEXY33zLNIQUQgB69TEB_wxg5UynIlnhEpb0Bwktr6L5OuKQZ33M6PsZL5LXTttm0FUMZbcK8vmymDIYa_9-LDJWs5_YmfjH6oFORRXvEhGJv255jeK_yE044FHRjKw0a0u4DcqcLaJLqjVJQWqS3BqAyw7D9dHu_ecxB7Sli3KRKxyBOe6Q6zx8IASVyeXlFhVkuHtcmT4r_JxwMmUHhUJzLq6-adrbW82xwk5Nv4p-dAsuhWtkaO3nmqa8AsePt_JdQ/p.jpeg",
          alt: "Arial Photograph of Variety Building",
        },
        {
          url: "https://previews.dropbox.com/p/thumb/ABejFiGIzN-dpR-dWsCj-D6VSEIfY5DcK5GomxCjc0YuTY54KofrNFoSCaIJQfnWxYLZVha41SUFWgYqwZGoYTFNmxP6hx7b3deIAnAngcOy1Ykw8YPrKaF9DD9SR1msoeUKuaP3KQsJ2OgKTfOAUGjELwFkdtqZKq0HeH-bqP8mcbloV2hu2ez1Kw1D_ubjO5Lg8S-QsKh4PQ3qjAzM2DBCml_nOdhUgHE6ocNVhJzcLaToihxWjH5c-k1Wp2_JalWSvmsS_heEYlOMQcHZTat4vzUr0A39j7M7a__mLYBgrSY0vDOQ4KKVVKCU1Mb-3Q1HsVPIcdK3xjkDQik_0PwYufRQt6r-sTqU1CzNl_lX-A/p.jpeg",
          alt: "Venice Beach Resteraunt",
        },
      ];

      const test = await prisma.image.createMany({
        data: images,
      });

      res.status(200).send(test);
    } catch (e) {
      res.status(400).send(e);
      console.error(e);
      process.exit(1);
    }
  }
  await prisma.$disconnect();
}
