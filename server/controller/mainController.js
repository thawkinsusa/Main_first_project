

const characters = [
    {
        image: 'https://vignette.wikia.nocookie.net/totalwar/images/2/2b/TW3K_Sun_Ren.jpg/revision/latest/scale-to-width-down/300?cb=20180914174643',
        id: 1,
        name: 'Sun Ren',
        health: '1000',
        attack: '100',
        armor: '10'

    },
    {
        image: 'data:image/jpeg;base64,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',
        name: 'Liu Bu',
        id: 2,
        health: '1010',
        attack: '103',
        armor: '14'

    },
    {
        image: 'https://vignette.wikia.nocookie.net/totalwar/images/1/1e/TW3K_Sun_Jian.jpg/revision/latest?cb=20180914174551',
        id: 3,
        name: 'Sun Jian',
        health: '1032',
        attack: '123',
        armor: '10'

    },
    {
        image: 'https://vignette.wikia.nocookie.net/totalwar/images/7/7d/TW3K_Sun_Ce.jpg/revision/latest/scale-to-width-down/2000?cb=20180914174521',
        id: 4,
        name: 'Sun Ce',
        health: '1043',
        attack: '104',
        armor: '15'

    },
    {
        image: 'https://vignette.wikia.nocookie.net/totalwar/images/2/2b/TW3K_Sun_Ren.jpg/revision/latest/scale-to-width-down/300?cb=20180914174643',
        id: 5,
        name: 'Sun Ryu',
        health: '1000',
        attack: '100',
        armor: '10'

    },
]

const charactersTwo = [
    {
        image: 'https://vignette.wikia.nocookie.net/totalwar/images/2/2b/TW3K_Sun_Ren.jpg/revision/latest/scale-to-width-down/300?cb=20180914174643',
        id: 6,
        name: 'Sun Ren',
        health: '1000',
        attack: '100',
        armor: '10'

    },
    {
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFx4bGRcXGB4gGRsfHhsdGiEeHiAdHiggGCAlHh0aITIhJSkrLi4uGR8zODMtNygtLisBCgoKDg0OGxAQGy4lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAREAuAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xABIEAACAQIFAQYEAwYDBAgHAQABAhEAAwQFEiExQQYTIlFhcQcygZEUQqEjUmKxwdEVM/BygqKyFiRDVJKT0vElNVNzwsPhCP/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAgECBgIDAAAAAAAAAAABAhEDEiExQQQTIlFhwYHwcZGi/9oADAMBAAIRAxEAPwDY2tg9KbG1vTpXmqb2u7S37WIexZbDWhbwhxDPiA5Dw5XQoRlIiJLbnxDagLUtoUvoBG4qhN24aXANkH8bhrKKdQY27y22LQSGmGYgwIjcbGogfFN3t5g1oWSbKd5hhJOpBe7km6NQhvlcARs4oDUwgoSBVK7KdrL+Nu4u0EWzcsW7Y0urEpeYXA4fxDWqugjTEg8+UbhO3GMZBde1atJbxFjC3tan/Oa5pvlTrhUUQBM7tyYoDQ2A8qreHz0/4ldwdxgAbaNZXTzCk3N+vQx6N5U67J5u+KOKZtGm1irlm3onSyJpg7kgtJIJEDbis++MF17ONsXbRKXe7lLnRWDxvO0FSQZ8xWZOipWa3HpXXHVY1dSANup/lUd2azdcVhrV8RLopYD8rFQSv0mpC6jHSVYAA+KROoQRA3GneDO/HG9aIH0g9K421gbUBU0a2NvrQCItHVMjTHy6d585niOkfWlJHlFdicQttS7mFEe8khQABuSSQABuSQKM60ARbar5AD6AdT/elbZUgEQQQCCNwQdwR6URPaj20VQFUBVUAAAQABsAB0AoAT7UAYUFxZBEnedxyKoPxdzzGYLD2b2FaD36q3h1TKvCkEcEj34oC+LdXVpgzEzpOny5iJ9JmlSo5rEc57Z9oMPg2vYjDWrKNCLcKxdUtwQusxsD8y8xUz8RO1OPw2CwN+0UsXr5HfDSreIoIEtIA5nrxvtuBqpiggVkKZh2kt2nvtdwdxLaM7LNsyFBJju46D96rR8I8/xWNwTX8VpJ75gjKAJUQeBtsxKj0X6kC7EV1GmgoAqJVY7XYlNRW5gFxXdoHQugYBiLx0iVJU/sl4n5+kCbUKhM6yNr7sy3dGq1oGxJQ+PxJDgCdfiBBnQvlWZXXB1w6bevp+fogr+ZW2v942AstcCKBfIkgHuwRr7onSq3WmCYCNtBkOb2FW5bw6jL8OytYbSlwQEgKe7ANqArHTzHG42pS72VvEtOMchhcXdd9Ny49w7qwAeSgkCIt7ATRLnY9yG1Yu4zMH8UR4nULJ8XygydKx0E7b49f7R6GvD9mv8AQ1GeOrPfTAAG6ttnuTDsGbQneEJuQkEiSVmOBNT2Bw1m5adTYt6LjubiaVKu2rxMwiGLETJE1EYjsncbXGKZCZgqp6i4JYFzrYh4Y7SFEAQIs6SNiSfp6Af35861Dbucs3lUtPv7BweFS0gt2kW2i/KqKFUewAiqr8QMkGLwxuIJa2HHi8Modm+YCIZQwP8ADtM1bhdEEnYDck8Vn/an4glP2eFA1cG4dwD/AAjqfU7eh5pOq5PM5qPJWfg1n9vDnF2r15VtrodSxETujQJ1EkBdgOnQ1a81+KNhJFi090/vN4F/kWP2FYxi7fc3Q42VyQ3vP9/5mnxrDk0lRyyZH1RcMZ8R8WzSi2re0eFSTEzvqJB+1MLvbXHE7Yl/oqDfrwOh2mq4TQh9iu25BmBO08HkDfjrA8qxszls/cs2F7Y5gzBVxLEniQpH6qauOS5/jw37d7T243OnxT5CI/lWbZHaD3QD6nmKuuAtMS6sSEEFW6kEGRP+uRRSdhSd9Sbt/Ee0lw2sTZe2QfmQh1joSNiNvKat2V5rZxC6rNxXHXSdx7jkfWsr7V4yy9tk0BWABDaJOx41R+nrUN2VZBc1M1xHBGhrZIiTBkjiTA325rayM2srTN6rP/jkJym4Ikm7bC+ZOrp5mJqw4LOySquDMGSeQQYgj7/Y1WPiFjBexeV4BSGZ8Ut9xP8A2duTv7jXB/gNdU7O6aZkecZAy2LKHLrmEZnUficViDpggyCpRAgmDMEgLG81p3xmy+42HwWiwcRaXEKXCtEiAqrIHhDyRqnbbzqE+JmVEZkdJxNy9iLDwTaR0Vd4tWdQUWiFVy1yfApJ3JNJdock/C2csF+5cS0Fc9ziU/EWLJ8Rdrhsx3h/aIEUKANJkiTVKLZrlWGXCYhm7PX8PcFi5pcN3iWzoaHMuNl2M6doq6fBaP8AB8NHndn/AM56jsBh2TIcYrDFBhYvkjFn9oBoMEDlFIEhTwS3PJcfA9v/AIVa9Llz/nJ/rQGhk0FGiuoAqmjNQLQGgAe4KI9wAEmdhJgEn6Abn2FFvWlJBIBKmRIGxgiR5GCeKS1HpzQB7d5XUOswRIkEH7ESD6EUhibukSenJPAp3omqb2kzxXbu0bZTv6n+wrMpUjMpaoie2mZ3rgCIf2UwVG2o+bH+QqjXyFJD89fMGf128veavZW1pJe4kDoWgz7dRVczFbLOWLAyseMASJBBIk6evXrXCT5s80nzZWszwZZNJ3BQMCAQBO3UCYPhMbSDzFMMsxRa2Vb5l8J+hkHnfrzPJ96nczcRKOm2xUckMDuNo2j9RUTiUI03lgWwRbdRPOkEO2/UyP8AdqrlUbj6o0KWLJdgoKgkxLEBR7k7AetNMxtMBCyRAkwOdyQIO/IH0NT2AwCQHuOAImPPykDc+w86kMHdeyzutlmUoVUMoHJBmGM/19KsZqJ2x4JVZmy3biOsEqZAHI69dvPzrVck7Ql1FtwNXdagVOxIEkcbVn2fYpXMEEMYkaNOkyf0gL/4jV47LYcsReuajcIiT12ifsI+hrc3asxki0ugrmeeKithnssCRFySAysRO3Mxt1qYs4rA27Jtg2yHWIkGfKev3prmOQWrrho0+emAD77b0jc7KWdyrOCRsCZAP2kj3rkcSQt52iOiLJBXVM7AT59eu/pUR8LsMy4u/jsZcLXSWtW9Z3id2E8AxpX01edLZZk0akuqCuhlDSeG522IPUc0Gc9qsJgrgtXNevu/yKDpBPG52J389gPStRbNwkyOsZeL+Ju4bLb+aM9+ExVzEQLaW9w2vWmt2CFlUHSfFsTuKtfaHsu93OMGLF02/wAPgiUZ07xVNtyikgkAk6h1B8E9KgcB8ZsNZ2WziGX906BHG4Oo+ux524q3Zl8ScBZw1rHjVcF5u6AQDvBolmBDERp1ee+odDNdkd0Nr/Yy5Zw+ZYrEYg38XicNdTUBotgFCqIqzBJOkAn0A5JI/ArAXrWWftkKh7rPakblGVIPoCQSPvwRTO98aMN3RurgsWyA/MyKLfMfMGYDf9auXZLtTYzDD9/hwyqG0FWEFWABjbY7EbjzqlJzvK6m7MRXUA6UVxNEDzQMd6A40mAPrz9qVIikWsKXVyPEoIBno0SPUGF+oHlQFd7d9oVw1kW1J727IUDy2k+nMfU1QrWCDr/mQSB7eomf6VF9tc5OIxty4D4UOi35QhifqZb603v50WQqEjYDUDB9THSd6883bPLOVsfpbZmBZyGt3RbuAnkHdWHoYIj2PWnmeZWobvCZ1SYHEdJ6kx0FQyktZVhJYGDHUJ8n18Wn6CpjK2xGIbukstdZBp1AgCRzM7QD61kyVrDYF7rEW1n1Ow+5qetdm9GHvNedVRk0sDxqJ8AB6tqiAOZPvWl9kMhTBYcLcUC6/wDmEkMGbiFMcHbb+fNYf8Su1X4nGEYcAYfDv4FHyu6ne4Rxudh/D7musYPqdoY6abY67O2bmu+eRbUIpB31T82/UAfrHnTu1nF8ubJXvVG5eIZRyZgkefvSuQ4xAWa0SUYjnqAiD+YNFx2fpZS4vhKuCCqbFZ8JJ8JBO45I3IrhO5N8H2McYwiuSsYi6mJuKtu2xJ6wJ9evAq/5Cwsr+GJLbB7bHkKeVn0On2286o2TYPvrq27TMG1fN6cz6EenlQdr87YYlO7cxZLKnsG0k7czH6V1xrho4eKVx5NVt3BQPciq1lHaJXVdXzsoO3Uef9xUhbx7liVQug9Dt7kcVlquD5LVOiWNyImqX2ryXBX8Sty/iVtMANaFlGtRMRJBUnid9h0qdbHFyDso96qWc28r7+4cTcZrpILCXIGwAA0DbaNt6sXyWD5I/tbi8uWwbOEtIz7TcVSdMEH523M8bHqasWS9tsHhMLgsJiMAuKKobikhCytcbUIDKdyZncbaeapvaXN8KbIw+DtFU1hncz4iAY58XXr5cVYsB20XAHBXLVi3df8ADLqJEN1TSGgn8p+9dVZ2Vouecdp8fmOFv2LGT3VtPaIL3n0BdpBUMqhogEAdQKD/APzrfnB4m30W+G/8SAf/AIU3xPb3O8TadsPlgs2wpLXLobZQJJBcopgSeDTn4C2WtYC7cK/5t4wT1CqF/wCbV9q2dDVLgFdTa5jREkEUFAO7cCuJosTRglAcSaZ5zd0WLrgwQhCnyJ2H6kU8QH3FI5lhBdtsh4YfbrNR9CPoYf8A4GqFTqDEfMG4P24/Wn2C0LuE0mIP34586uD9nkGtQCz6SF1HaTwTHEUphezlhLZLgt4d2c7DbciI0iuGjPN5bFOyfZyzoV9Ph0zz1Jk/QH+lWLs3lNnDWtFliyMxYNIMz6jkc1S8b2kSwVs2rqsi2wAgVnDEiILKNO4jfgSdjO0dicwcMWxCG2qn/K1qpNv+K2DrB5hQ0AmSu1XeMex6oYuDRO2GIa3gMXcUwy4e6QfIhDvXlvC4YtbYgRvA/Q1r174lXGstZv4VGa8pAGpguhlKnUCZB42kc9Oaq2Ow+DdbdvD3GF9SQ4CHuZAO6RLRI3YSIk7AV2jNCUXRFWrps21QmJVQCBwTO/ryTHpSGeNBS0hUqwkt4wTJneSAfqKcCyLhTUdkUtz1A2/TV96iO0F6SI2gTt6kmsapuzusjSomuxDd07kHxFhatj1bljHRRJ/TrVPzK/3l12mRqIB2jSNl4AHAFSGAxfdDvEMFbZ1HzdiQv2DD7E1EKtbSo5TlZJYPEnSIMMh8JHNPP+l2PXwri7yqBAAcgVC22ina2tS6vWrRhuuR8narGaw73jc8w4BkeXE8etTnZrD4LGXf2liL9wswBuMVY8kLvz1Cn2E1TXWKcZZiO7uK0lYIIYcqQZDfQ1lxRKTLN22wwuPhsDh0AO7kKIAB2nb2Yn6VdMowaWbVu0OUWJI36nn15+tO8kv4XHWu8RVt4m2sOQNt4YweqkifT+bUop5muM7XBwyJx4ZZ+2eNvnIsQ9rxubRVv4U2S4fWE1H6+kVN9j8kGGy/D4dgAUtrrH8Z8bf8Rakexl1jaZZXQDtzqk8zO0cfc1YHNdou0d4u0iPzK3CjbYf2rqeXBNBWjQdaP1miqPWjaCaABrnkK5XoDtQXbqopdiFUCSSYAHrQDLFWt548z6ViHbftjimv3FsMpsoxVZUMDGxbcaWBIkEgxIg71ae23ai7iD3OGIFojefCzz78D09faqJatOztZVJuH5ivjCr1JA5ggR9fess1FA5J2usPcUY2yLbDjE4fwXVJ6sF8Nz7fQ1IYzG4Bbha7fN+4/wCZROxOx0Fbaho25jrTJ8jw8IIOtoMEjUZ9Op+wEfSmWe5bYRWW2ge4pHeNq8NqZgMZhn8wsxBrDgjStDnNM4w929YtJhmtqlwB7ggvoMAzA3PWDNI2ceyKO7ud2GYCQIY8gCeQu8kfeoq1cuMF1OCuwVrhggDcQfyjy96k8XgyLOEbWR3n+YomGCHWpM9Rp/46yklSOzjcbQhjrpRXA81B+rR/SoLG4s3GJ38RgD0EAfoB+tPczxsg9PH/ACn/ANQppby24hU3EZQ24kbke3M+9duEeam+gjcw5Atr+Zm+XymI+u9ObSodaQTsdBWJkb8fmnjmfKeKdYpNd3WAwOkrJUgAxE8UrYwaaNII1lwV/wB0THpPE780DZdsk+FNm7YS6+NOp1DAWrYKAESN2Mt7wKrmFyVrNzE4a6PEhEHow3hh7iD6TVt7G49LL2bF0fs7quII3S7bMMP94DUR5tI53tWcZdh8USFcJdsjZjzo5IP7yEbyOPuKsZau30OGT1Jx7mLZtlpVSwGw5P8Aryq19ivhq2JRb+IY27R3VR87DodxCqRwYJPIjY0NhA5Kld+qnhlnlSQNQPn94rTbnaG3pDBhBHHX2irkpcoxiyNWpdQP8MTD2O5sAW1Ajnf6zuxPmTUBbwwMU+PfYokpqFsbAnZT5+/lU9gsntKoDAsepJP9IrztbMrW7Fuxw8NwdJH8jU89um+WYZEB0CJ96eGu0VSO0VSoSda6jOa6qaG21GX0NNXkH0pVaADHY23ZttdvOERRLM3AFZJ2p7fjEXHVdQs2ztCncgkaz06bD15pn8UO31q+xwtoq9lGl251sPL+EefU79BVHt53aIKxpDRqHQxxPnFZbZuKXcnsTmSOxt2XRJUa3eJjYQqnl9zETsJ95Czg4YYayVYkySUUkbapdhJLnaFB432FVGw1oQxAbf5Z2Ppt0pXCAoSyQFLfLyN/5wOu1SzVFjzPECwwtlhqYwBcCMiiILECfWAYB6iBWf4u9PgTjljHJ/t5CpXPiEZwG7xifn9Bxt0/sB0prl+Xs6Aoj3N9RKqSBtwTx+tVV1ZmTHWELXz+1cxcuFo82AJMHeNmO1aRjey2u3ZthtItppnqOPvPnVOyLLGXD3LsajcYooV5W2I3dtDeM7gBQfL6TFpL9u33hbSBBUO51EDaWcnwE7dPqdq4z9T9L6HoxSUU9ldnX8qw+Db9ipxOJMwW/wAu15n91T67nn2qQ7KdnPx925ruytsSzq0EsdlCj92eT7CaqmZdoHvW1AMA8wIY+hjbbj15rQ8ns3LWHS9hrff3MMmi7puadUw7LwdRUEH2PWBXOKltydcs4KFQ7/v9hc/7D4MWne0HciDBuEED5SJ4kNHTkN7DKbuUHVdCXGXu1Lw25IAJiQBvt5VpWOx2PQF7ws4dbslUvXDJ2ALcyR11EAcmqHiMY9u67m0rC4pSbRJRiViVPnuTB8+IrvDa+TxM61mOq011W8SXLNxYHiDC0FaesQpBgRvM7CtA+HObW3uReXU6yyMeTbuagQejAEkVRs5tBWa2jQRZVLkbKXAcNG8EbqOTx1gUyy3HXCluzshDG2L8mVS5LFed55B2jfzmuq6UcZLmzfe13ZgYm2hteF0MppgAE7T5dd+hE1TbWUXyWRrcXEaGRZMzw67bo0GDPQ+VaJ2UuXThbRuMCzIrExHInjpPMfxVJNaXUHIGoCA3WDvHtWZRtURwUuWV/s/ld62gDHw/uHc/fp+tL4W6qOyFiXJJ8QiBxA6RU/NM8XbJI+1NaLrXQcYbYD1peaIq8elAxrRs64a6kmO1dQBbZJ5rPPjB2v8Awlj8NaP7a8m7A7ohMT7tDAexPStCRqqOf/DzCYzFDE3zcYaQDaDQjEAiSR4uvAI394oVHnPLcIbt1LY5Y/YcknyAAJJ8hUvdy9GkW1BVeXP+ufSti+IGGw2CwHcYazbtNebu10rBiNbb8mQsc7yKzJL47sW0U6lG8dWI/WKsUHZBJk1yRKET8u4DH2UmT9qnhkltAwGMYuFk2golCPmDMCRIMCIB9KjG7vdWljwzT9x/epI4UJhWvo8Lsqoijq2klz0GxgDrFYyL2N4/djIYO2L5SzbuXmkrquENvO+lFUAn3JHpU/bylz4cbee2oUsLYIMAfwrFteR58inuFzS3bRe5thTolyglyepLflB9SKg87zNmTVKid4ncgiCDEA+cbDYelYQsJmGOW0pGHJCTuNzO2xJPB24EDf60yxOb96qi6zwgAW2vywBHHHlJM1FXsY1wwF9go/QD+lHtWo1b793q+vT+grSiVy4E7P8AmgcAkQJ49/tV9ybFfiLd7L2vG3auLrXT+VkOuQfKQCQefQ71nty7+0De1SeV37gcXLXjuK3htQSWGk6iegUKGkz1qyVowma7muf4e3oYaLzJZNs3LrDvQW2GpQDrWRMkkzJ2O9Z9lOYD8Vcdyra5DQQEJmNv3h5nynnrCX8ye5bQl15g2l+bmBCndp9J56U0t2tB1NBIPyCDB/iPE+lc4R1dsPlD3HdoLlxi9wRpWFT90AeEdII6nklm86ZgnurLgQdifUodP18On70wxt77Hcn96D+u9PLAjBqxmRfYCPI20P8AQV3ic5/Bu3wu7TnGG+GUJ3aWVCj0Qgn16fSKvs15y+HPaRcJiBcf5TAJ8hO/6E16DweYW7yC5acOp4K70Yi+w+U7UEdaSW5R5qGg2vehDTuP0pPVQ6qA67xXUW821BQALFcRNIwdvF+lc1o+Z/SgM/8AjVlzPhEvqRNhyY6kMADHTYCawxLxDkydzvv/AG969Qdo8p/EYW9Z31PbYLqjTqjadpiY68E15kzbI8ThjGIsXLRmJdSFPs3yt9CaG4y4oI2I6RA9PKpbJ8SrW71ttRaJRfyxwxMbkrswAIHMzVf1b0dbxBBXZgdiKlWJPksd/Obi21tlNwBsRERO4AG8gzqMk8zUDexLMeefWuvYu5c9ABG07egk7c/6G1FxmCa2wU9Dz7gH+4+lEqMuQGFgFvEQTsCOZ3I6iJIAnpM0vZvEXNTDY7H24poyKeoHof8AXnJpM246g+xqgdYxdLR5f+9A8kBmbciI6wo07xxsI33P60ndadPmBB+lHYDSDvt9hUsJDoXVRfAJnljEnlduqiDP86SRSSWnbz8z5f6ml8swlssDfZlSOEg3GjfYE+Aep+1P8bmWHKxZt6FGw5Jjc7sdhyJg7x7REiSl2RCY3Eagi8KogDy6/eSTNSeSL3lu7bI8K2bj8fmbSAT/AEqDVS7bCpzCWUt2byO5W4y22CyZaWJ0wOgEEzxI8q6ROculDG2umQas3ZTtNiMDclGlDuVPykVXbrKwEczv/elbMkRUIz0Z2Y7X2cYAF8LxupPX0853+1WOzGxB2PB6V5WTGXLJVkbS4IIIA2j32+4rdPhz2mTG2QGCi9bUB1ESRwHgARJHQUNxdou6GZFCab9wOYpQWR0A+1Q0BeFDRLlseQn2rqANaXeloFIIfelQKAIaRv2lZSrAFTsQRI+tLsKMFoDKe1fwht3WFzBMtkk+NGnQPVYBI8tPHlHWv9pew9jLsINT99i7p2OmFVB82lZ2J2Go7wTEb1ujLzH0msP+IWYm9i3gg90ShAPEbdeQWk/WqYk6M6uX0WNpjeOnp70TEYwPsQfepVMgYhrruioCdyf7c00w2B333BBZZ6gbTHT2NSuCRab4I+zYdyQiatKlm9FHJPkB50cYaeqiek70jcffjrS9snrG3NQ6oE4LcANLEgAaTMnYe8+VTH+DqgGqTB36bx5AnjcTO8esUnhLxtFXFoGDtz94U7kc/SpHFdoO9uFnt6CxnwCJMzssRP8AryrE7fQ9GGWOLbnyJrhVC7IoGmeOYiozNClwADbrIH0pe7jle5KvH8DA/aaK1omW8PJ2kD1gA7msxjTtnpyZYyjrFCeBwh8OlwhBBBKTv5gT/MVL5h2aGGsDFMfxMuBJbSF1SQSCCTJ2g+dMsuwrXHVVXmPmMTJED94cjp1qyWMkvXLXdsECvKtJc6SRKNHmpjYwPOu2yPn+WUG1uZ61IYFCTAE0xdSjMrCGUlSPUEg8c7ineGxB6KfcR/oVpHnkmxbHWpWRyP8AU1Kdhc+fB3e9XfxIHG0lN53PAO31ik8fdL21ECUBJgxMxuVI2O3I2pfD5bbu2n/Dkd6VIZZnUNiCQR4SD+YEdTvFSyxWqo9H4W8rqrqQVYSCOtKMNjFZX8Hu00r+EdohVKT+80yB7kcecedauoqHRMa6fOursaDobTzH+o9a6hQ9xffeAYPESZpUUQLRlSgAehE0c29uaITQBS8b1g/xByC9h8U163pe1dYsD7n5W9RMfr5xvEVF569tLTXG8J6eHVJ/2eH+v3oZkrPNGJZngM3DfJ0U+39af4vC3rfdqiFtiAY6GIkSNMnVz0A3o2MuKcTduWgGYuSnhAVfXSNvYDYU+yUYhS7PceHgspbZtwJPlG3HpUZYqkVzO8ALeJKCABEwZ0mOCfMdaM2T3AupkcavzRAO3SRU7jcFba9I0jWdR34J3IPrqn71LX8JdxDg3W1GNgTLQNv0+wodPT3K1l9u4pUx/CZB3HqR125FOb1iVbw6YgKRzMdSP9f0nLGStwNQIncHdfcTUphsjxC8sY/jClT0mPT3NZYSTKjZGEW2qvhXN3TLMb1yCY3OlIgTOxqJawC7FVZEjiSd/dpJq9X7VmyT3j4eTsSG0bf7ImdwDUXma4UGVuKo82Ihp8jyaJGnH+CMya5Eaj4gWg8HSNJ6CWjy/iq2YLEoxbx6S5mCRpU7fKWIG4LiOgA28qNjcRZLIFdWCevO+8e4Ao+YvcS/ct23hA/g0mV06tSb8xGn7b1Kt2dKvgS7U2A2MvadQGqfEQWJI1EkiQTJPFMbdlV5596lMyst+FNwg94l4anO5K3Fgb9YZPpqPnVeVC25JNajLZWZzYlhm4vlj04hBIVo26E/ajYbMSk6bjLOx0sRI9Y5pq2CO3G+3t7+VNrllgSCDKmD6RtVOLn8IvuWqEtWcZYLSLmm4AVOkr4gVaQVkCNLT1Nb5kGPa/YR2Gl48Q4g+Y9DyPevKOU3ruru7Kl2cgaFElvSINeifhfl+Y2rTLjgqrC90uoG4vMhtIjyPJO9UVHsWfMcRp2HJ/ShpfEWA3ImKGhA5WjItcoo4BoDgKis9z7DYUL+IvJa1cajufpzAnc8CmvbHMxYsmbotswOltWmWA2EjcAnmK8y4jM8RibhuXGe+V/M+8ff7xSypN8I2Dtb8W1w98WsLbt31gFnLkD2EDb339qznNe3GPxDl3vwJOlVRYQHaBtv7nyqv3LbKJZG36nqf60/wXZ3HXEW5bwl90fcOttipHoQN6KmHFxdPgjTYDCRO3md6UfEXWGlnciIgsePL+VPLeSYhhbK2LpF4kWoQnWRudMfNABJjypTB9nsXcUm1hL1wKxVittiAy8qYHI8ua0QiBhx1J+9SRyDENbW4g8BVmDd/biFjUT+0lQCQDMQSByYomGyPFX9Ys4e7cNsw6pbYlDvs23hOx2Pkal8rs5j3fcW8E9xbXeWridy5/zSrMlyCCCCqMNOkiBUB1i/mliw9vUvdkKs97aLjvFLJoKvqJZVJWJkDamGJGPth+9u3R3d3uWL3Z03IJ07tMQDuPDA54p/l2Pxj3GtrYD3Lb237oW3LW/wyNZSFDSBbDmZk6oJJ3kMVdxuJtKGwhf8QVNtu6ua7rWrRt61htLnuxJgRtMUFkVd7L4wPp7pg5cp8y+JhdWyQDqhv2jqNifmniTTT/o9iO6a+UAtqzKxLoGBUqrSpbVszoOOWA61ZLmfZiLRdlfRr7sO1ttK3FtGzAYQBcIkkGZcaokUe/jcyxL3cEcHNxma5dsiy4YO4tt3pBbwN4VYHYHvGBkNFANey3w/xGKFm8WtrhrjQ1wuAVC3AjCDHjjUwG8gVGdrchOBxT2FvC5pAIdJGzCQD6x5SN6uZ7QZg2HbK7eDIuowbu+4l7SAgzBENJI8ZBku3pNOGR30urYezcW60abbI2szxCkSeDuPI+VKA8wHaQW8Hfwty294XUADEx3ZB1DTIJgHfpJqFwGLQTrB9gOf7VNZlk2JtXEsvhrq3LnyKUMv/sgfN9OKj7eT32vmwMPdN5ebSo2sRBkrEjkfepSNSk5O2SeCxuGZQm4ZoEaSRPHIFaN2R7GYDGp3mItubyeG4BcZVaJAYhSCCV0zBHnyTOW5bkeMul3sYa6/dkhtCE6WHIMfmH7o39N6mOzPbPEWriWLYIL3FD6R+0cAjwAt8s8bQeKUQ9B5Pk+Hwy6bFm3aX+BQCfc8sfUmpNTSNi7qUEqVMAlTEg+RiRtxtR9VCAsetdRWG29dQC29CwoAaNQGDfG3tKTiThrb+G2AWA6XIn/liR1mqv2CsgyzMAFfUfEysYiApVHMzB+U0p8VMFctZletuZ1sbobqyufDv10rC+mk1IfDF1V7u5A0wY6/tLJjYgkbbjqJ5rlmXpPX4J1k/DGvbzRGpX1F2BIKuCNo5cAtO5mOlTnZLOcSuRY4rfuq1l7K2jr3tgukhfIGTt60j8VbS6bIX5QCw2iJuNsNllRMAxwKR7Lf/Ic0/wDvWI2/jSmFVFr5L42W00/hfaLr2OwVx7GROqMy2nxBuMBsupbiifKTtSXZp74wr9x3mo52Q/dgk92bgD6o/LHM7Up2PxLrZyFFdlW4+JDqrEK4C3CAwGzQd9+tKdjs2GGsO5JCvnFy2/tcJQT6Bip+ldTxhDaxAbPzhdfftdsm33fzzG8R15/WoHsv+POV5l3BvHGfjFDFCe91fsw+/M/NP1p7lWV4qzaz2xaa6+IFy33bIzd6QzMynVySUIJM+dRfZfC40ZRmKWBfGMGLSdDML0/s9ckGZ+ad/OaoGfwbVzmV/VqNw4a9q1cly6TJ85mrJbvhc/y3BIf2eCsm1/vnDOze+2j6g1VvgutxMwvq8h1w14EHkMGQGfWatNi0LmeZXj0ELjbJuH0dcM6sD04KfUGgDYPCLdyXFp+ZcZeur72rq3G+6hv1pfH3HXHdomtFhc/C2dBUkMD+HEaSNwZprkeNFrDYYt8j5zetN5EXbd63v6eIH6Uvi7btjO0K2wzXDhbOgIDrJ/D7aQNyZjioAMjx+IuZlcuX8O+GuJlZWHMs2l57yYESZ+q05yi+13FZFduEvcbB3iXbck92m5PnufuacaWbNSpk3P8ABYIMltRuGR7zTfKbLWsVkNq4NFxcJeDI3zA92u0eex+xqgj8qxb3bWTXLrtcf8dfGtyS0aroiTvwAPoPKpjJcGFzzEYro+GskeWq66Wv/wBR/WovKMI9q1klu6jI/wCOv+BwQ0arpBg7xBB+o86nctxCk4Y/9pcx1zDN/sYe5jLi/wA1+9QFeyjMLy4JrmEDXbmEzK7cv2Ecqz2ybnIAJZd1PB+U8laypMQ1/HjEFu5NzEd5qTfQWuapAPME9a0nsZ2dvJirWYWnc68wvWbltFOlbU3NTOR0kLzsPD1is87UlbeOxYSNIxN3SANhFxoHtPSqD05k+aWsVbNy0ZAYqekMOR+oP1p8Ums7+BNtjgbtxuLmIYr7BEU/8QP2rSBUAkRtFBRri11AKj1oSKAMKBmoDOPjnliPgBiO7LXLNxYYdEYw2rzXj2MHiZwSxj2UkI2x36RP1r2AN6oXab4UYHF3RdhsOYhhYCKrcwSNJAPqBv8ArRpNUzUZSi7i6ZgozN3UBzIAiPqT/XihtZtc0NYtNc0vu1tC2liN5KjZoidxtFazd+BdqRpxtzTPiBtrJHkDqAB9SDV27L9gsDgiXs2Tra33bMzliw68mBq2mAOKJJKkJzlN3J2eaUzjFL3YXEX1Fok2gLjju9XzaN/BMmYiZoy5pd0FGvXSjPrKd42kufzkTBb+Lmtozn4RW7t+bTC1bK+IxJmZJUcAmnVv4K4DSFNy+37QMWLCSoEaNlgAneQJ6VTJjDdqcZqLjF4kMwUFhecMwWQskMC0SRJnmkMHnWLtFhbxN+3rYs+i666m6s0N4m9TvXpTLuweXYcg2sMoYCFJZmj21sQD6xUTmHwxwDgkWZeSZLMB7GCNqgMBwWPeyS1q69tyCC6OysQdyCQQSCeR1obWdYhFtrbv3VW2xa2FuMO7JBBKEHwSCQQPM1Y7/wAKc0e+yDDoq7kOHHdREgAyW3445NP+zvwcxl4P+J/6sRsklWk+Z0k7fWqCljM7ujQ124VDlwpuMVDn88TGvc+LnehTtBibd030xF7vyIa7rbWRAEFiZYQAIMjYeVabkvwJaQcXihE/JaUkkbfmaI6jg1dMJ8Jsqtgg2Gck8vcYkegggD7UsHnyxn2K703vxN8XmENcF1hcYbbFgZjYbcbCjYrOLpcXWv3WurEXTcY3BExDE6h14PX1r0JhvhrlyW3tNYFxWYnU/wA6zuArLBEcSN6HD/C/K1I/6qpgEeJ3MzHMtudufU0B57xfaDFXHt37uIvm4s93cLtK+eg/l9YpO3neIUg/iLwIcupF15Dt8zgzszSZbkyZr1PjezuFu4Y4V7KdyVjQBEbgyCNwZAM+Yqnt8HMsLTpvAfui7tyD1E77jnqaAwzAZ/i7OsWcVetC4SX03GGonljB+Y/vc1NdhuwmIzF9W6YcN47xHO+4SfmY+fA6+R9Ct2XwX/c8N/5Nv/01IogUAAAAcAcCoAMoy61h7NuzZUJbtjSqj+fqSZJPUk08Iots0Y0AncHNdXXTXUAQNXDekUalZ9KAUVQN6qWW9sWv4xrAthEVmQap1llnfkQDp4g7MpnkC28jjms2xPZbH28Rfa0qXReQqlwvp7qdADn82oBJlZ3O3pHZqNdzRrTT/ajkUxyzDvbtolxtbhRrYCAzRBIHQU81VTIdV2rooC1AxoCLxuaot4WAyi4yyobhudlPDMAJImQCPOhwOcJcutYkC6ihmUHoevnyQN6Z57l9y4LgUa0uDddpDAAAjVtpgb8H34qO7H9ljhXuYi6SbjjSATJRJDaZG2xG3kNqnJeKLnbbpRRSds0ZuKpBc0xzHMLdkS7KoiSWIAA8z9dqeGq72xyQ4mywUS4U6QTG4IZTI4IcT96FQvlWcLeRGDI2ocqdg0bjcn1+1SyVTOxPZh7I13V03NRLeLUWO6qTyIC9POrnECog6vg6J9qNXAUSqQZ5zma4e0bjCYMBRySeBVNw/bRsRibOHI7lGJFwo0lj0QEiVB6kb7jcVa+0WU/ibJtgwwOpSeNQnmOhkj0qrdnewr2ntvdKko2qQZnfV5dSB9B1qOyqi/WbYQBQNgNhM/zpQUUNQzVIBcWuoHahoSyPs3qJiccyOqi0zKYlwVgEmIgmf/emeGvyYp3i7K3F0uAynkfWahLK02W+PX3WMOnSIa8ughWBEqNjxpmJI5JO9CcqQj/LxewUBDeA2jcyp34gkz8+3AiQxWV2AukW1iTtLcmB0PoPtRRlNgLpNpeZjePX34HNBYx/wcQ7f9d3BG95DqDFiY1bfnLA+kbAb2HA492bS1i4gH5mKx+hkTt061HYXL7G/wCzA+/TjrT/AAFlLa6bahV5gefFBY9xl9lTUiG4RHhBAJ38zttzUVmFtr4Gu3eQrrjQ67gqNzPrsD6kcMRT/ZgVIkHYjzFIWsnww/7JeCOvBBBHPUGqWyBt5YSjW+7xYHzSbizIUwAwnmeRv0kAAUd8r1kv3WMtsFSEW6oQlCkACSARG8xqgjeanTk+GMfsgdIgbnbk+fqfvQDJcOF090ImQJOx2439J+9CiOVM1m0EWzeIQbd4ylyCx9dyOkxsPSpdiYqNt5XhlYMLa6huDJMHnqeZ3p62JEUJZC5wj4hSjWr692dStauKA+2iJ521Mdx+XrUaMmAAhMdxse/A43EsJI2iCeI2iTM3cyrDNqm3BaSTJBJJknnzpvjsBp2tWLJULA1OwPiGhthtGknr+tSxYjcykhSot4ohSdJ71NfjKliNoMC2ILHfW460fL8P3Dsy2cQ8iAWuqw38Z2kQxLQdphV3iKBcv20NZshHADhXeRzOkkb8z0p5/heGUyLYB85M/wA6WLRJhi9sSCpZdwD4hI33HUeYqrYvIFW4APxLgxLC6kAjaNJUAbeXTpvVgt3FVQq7ACAPIDYUyx+CtXDqZQWG4O8jj19KWTYhLmXgju2t40aZJbvV/MQPmJkr4ZA9dxxXLgp1MwxhYydPeIeXBOk9N2JHERO2lSHGLytRC27Voqd2DMwJO4naehNMrtpgyMLFglTsdTeGGLj3339+nlLMOaQo+A8KKqY39nMHv1kjUjiSxk7qPoCDttUnkWSpafWHvyjFQLlwMGGmA0R1B96jsLltnSpNtQwHQsRP1NSWGuJbBCALJ1GOpO0/oKmxnzUT7Xq6oh8atdTYeYiLweOTkkRUkMen70DzNZPazgzzUi+csAB0qbE3aNJuXQeTxSVwmqnhe0ANrU27Lz/SkV7QM07/AP8AKbFeRFvF/SDRBjNxvVewubifE2xpW7m6cAfXoKbInmIstrFiJmkRji8kbAfzqq/4oIInz/WmVm/dW0gbEksBu2keIwRJB9YO3qKbIeajQcJfO386VxWMAkyNqoFnFYjcri9o62xMwROx4nePSkWxV9INzE6xvK6AJlQOQeh3+po5EeVUWDE56Z8qRtZ5O01R8bediSLxEkxAEDcR9t/vTbv7w1RfjylAY49d+v3rGxw3fuaQM6jc0S52gJPNZvZxtwNL3Sw36ARuTP22+gopu3P/AK56flH1+9TZkeSXuahbzgGlhmXhknrWZYe7e/7xAj9wHoR5+e/0qTTE3jxiYnytgjgDr9fvTYnmP3L1+OpwMTtzVVwd/ZVZ9RAAJ41EdY4EnpUjexUKSG6bCqpFjkH+KxRBH9ajb+OnrUZmONgBieagMZmp6GsSkcp5Gy1NmkbTSH+LSdzVSGOJ60icV61z2ZxcmXW/nI85NBVQTF11NmTaRHW+lP7nFdXV6D6THFrj6GhwvJoK6oZJJvlFAeDXV1Qyxq3Jo175ftXV1DLFsP8A5Z/11pLF8UFdUZlkU9JXaGuqMg1PFLWeBXV1CMeDinGC6V1dWTDJfD/N9RT7F8D2rq6r2IReZ/KvvVbxfNdXVlme4VKI3NdXVCHPXV1dQqP/2Q==',
        name: 'Liu Bu',
        id: 7,
        health: '1010',
        attack: '103',
        armor: '14'

    },
    {
        image: 'https://vignette.wikia.nocookie.net/totalwar/images/1/1e/TW3K_Sun_Jian.jpg/revision/latest?cb=20180914174551',
        id: 8,
        name: 'Sun Jian',
        health: '1032',
        attack: '123',
        armor: '10'

    },
    {
        image: 'https://vignette.wikia.nocookie.net/totalwar/images/7/7d/TW3K_Sun_Ce.jpg/revision/latest/scale-to-width-down/2000?cb=20180914174521',
        id: 9,
        name: 'Sun Ce',
        health: '1043',
        attack: '104',
        armor: '15'

    },
    {
        image: 'https://vignette.wikia.nocookie.net/totalwar/images/2/2b/TW3K_Sun_Ren.jpg/revision/latest/scale-to-width-down/300?cb=20180914174643',
        id: 11,
        name: 'Sun Ryu',
        health: '1000',
        attack: '100',
        armor: '10'

    },
]

let id = 12



module.exports = {
    characters(req, res) {
        res.status(200).send(characters)
    },
    charactersTwo(req, res) {
        res.status(200).send(charactersTwo)
    },

    updateNameTwo(req, res) {

        let {id} = req.params;
        let {name, health, attack, armor} = req.body

        let updatedCharacter = {
            name,
            health,
            attack,
            armor
        }

        let index = charactersTwo.findIndex( hero => hero.id === +id)

        charactersTwo[index] = {...charactersTwo[index], ...updatedCharacter}


        res.status(200).send(charactersTwo)
 
    },
}