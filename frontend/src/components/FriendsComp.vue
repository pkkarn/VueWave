<template>
    <div id="friends_comp">
        <h3>Friends <span>(282)</span></h3>
        <div class="friends">
            <div id="friend_slot" class="mb-3">
                <div class="profile_img">
                    <img src="https://www.irishtimes.com/polopoly_fs/1.3101809.1497028489!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg" alt="">
                </div>
                <div class="detail">
                    <p class="user_name">Harry Potter</p>
                    <p class="active_status">12m ago</p>
                </div>
            </div>

            <div id="friend_slot" class="mb-3">
                <div class="profile_img">
                    <img src="https://i1.sndcdn.com/avatars-000008160663-e3peo3-t500x500.jpg" alt="">
                </div>
                <div class="detail">
                    <p class="user_name">Naruto Uzumaki</p>
                    <p class="active_status">1 Hr ago</p>
                </div>
            </div>

            <div id="friend_slot" class="mb-3">
                <div class="profile_img">
                    <img src="https://i.pinimg.com/originals/b4/6d/91/b46d91c7a61244cae00bee490b36eeaf.jpg" alt="">
                </div>
                <div class="detail">
                    <p class="user_name">Sasuke Uchiha</p>
                    <p class="active_status">12m ago</p>
                </div>
            </div>

            <div id="friend_slot" class="mb-3">
                <div class="profile_img">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYEhIYDxUPEg8YDx8SEhAVJSEnJyUhJCQpLjwzKSw4LSQkNDo0OD09Nzc3KDE9SlI1VzxCN0oBDAwMDw8PGBAPEj8dGB01MT8/MTQ/NDQxNDQ/MT80MTQxMTQ/MTQ0MTQxMTE0NDExMTExMTQxMTExMTExMTExMf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYABwj/xAA7EAACAQMCAwYEBAUDBAMAAAABAgADBBESIQUxQQYTIlFhcTKBkaFCUrHBI2Jy0eEVJPAHU4LxFGTC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAIDAQACAwAAAAAAAAAAAQIREiExQQNREzJh/9oADAMBAAIRAxEAPwB1Y4I2sdE04lWOLBUQxCiEMQBDEoWDU5QoL8pAyRAIjkYubpKaM7sAq/EfKAUEkcs7+UobrtGhTNIZYkgEkDSBzMoal+2tqiPq33JYjT1x6yzG1m5SNu9ZBzYDGxGYRmCe8bvNa76sYfcgN1xnrLS34yaekKrVMtl3Y8v7RcbCZStQRBIgW9YOoOwz01Aw2cAgE7nkPORQkQSI4RBIg8N4iEQyIhgNEQY6RBIgNkQSI4RExAbInQiJ0CxWOrGljqwHFhCIIohRLDiKIQlVx5fKZyx49lXFQHUlTBI/LvvHOP8AEaltVpOD/DKlXU8jvMXfcUAqM9PGHcVMcirdRjyO0SbStDxDtKV1aSArDFNgc7hsEzKXnGalQVFY5Dvqz5DykG9uA7syjSpYsE6LI2Zeomt+pS3JxjUQDzA6x2lWVSCp0kDIJGTmVxMTMvI4RbJe58RYly3PG6rj6Q6lY6cCpsc5XJJ+cpg2I+tyc5HPzO8bLh+ku3uqlIq6Mdjkb7AywHaCo1Raj4LKuFwcAfKUDOCd/tOGM7ZMm14vS7Pj9vUVcvpYjdTtvLTYgEcjuJ5XbPuMjrsJ6fZNqp0z/Iu3yksQ4YJEcIgkSHgDBIhkRCIAEQCI4REIgNzoRE6BMUx5YykeWA6ISiIIaCGhARZ2INaqqKWY4UbkwMV24ujrNMjKqgbPuD/7+UxFUNnkcclPpLvtDcvWq1HXJXJUddpUUXCMDqOORGn/ADNMorxMSxr6SMhc+WV0xhLYk7efIGSxqXaKozt1hGnjb7S8Ts/WCippyMavaNLwxyxBUg7DGJLlI3Mbfisp22pSR0OD6f8AN/pI5XGRNdaWXdnZcj4XU/jHUGE/CkbIK4PnjBmP5I6fxVjSYSPiWvFODNTyy7r5yqG3Obl33HPLHXVTbZ1JGoZztgHE9M4RR0UaYAI21YJzjM8qRsT0LshXqvTIchkAGg/iHoZa53pfwSI5iDIhsiCRHCIJg8BiCYZEQiABE6FiLAfSPLGFj9OCHRH0EZWPoIaHiNXKKUYOMrpyR5ySFg1KeQR5jEg844tfrWZgtMKoRlTC9fOZlHAbBQHxZyRuJ6T2hoUkWjT0AAvp1BeQx/fE8/vqYDPgYw3LrianiSdmGJdsAbZ5TYdnOELu7rkDG0pez1iKjMcdZ6fw3h2hAMepnLPL49GGHWzVLu+7qYXGV1Y58/8AhldY26k1HIwS4IJHTYTR2vDKhVtPhBJB6bSrv7R0fA3/AAkfpOVdsVTf21PWxUdOn6yA5IO/kBmX4smbBIxkbRupw7UDtuG0mZdGeuFDAj7THcWsTTYkDbmJvqtmVJ2lbxOwD0ztvzE64Zacc8dxglP1novYpMW2fNyZ59UolGIPQz0nsiP9pT/qb9Z3eXKaXBEEiGRBIhgJgkQyIhEgbIg4hmIYTwGIs4zoU6seSMLHUMESUkuisiUpYW45w0NViFI+iTikKznabhjV6QCHDIdY9duU8xrUH1EvnfY+/wDwT2p0nnHbC3FOrgLhWOv0jZJun+x1qQy7Zy2fpPS1uqVPaocHHKZLhri3txUC5Youn3xzmP4xxiu9QlWIJyOeo/ScP7Xb0y6mo9Urdr7WmSgqKCOhPKQK/FqdTxZUjnkOCDPGChzkuc+snWgdSNLnEZYxrHb1j/VKSgFmAC9czJ8Y7bCnUZaaZ6E5lDe06xXJDaSMg9DM/WVQd9zJjJ9ay3PGkue2NRh4VA887yVYceWsNDgB/wAJHJpk7SjrcIqksT8IXLH6kS3sKNNn0gYdTv4Sp+Y6TdkjE2Z47SAqrgfEPvPQuFWopUadMdE39+sxnEqOq8tkPI6SfbM345DHKdMbuPP+SdkIgkQohmnMBEQwyIBEIEiDiOGCRIoMToRE6E05Y4kECEsCTQMtLYSqoc5cWYhpMpJtBZJIoCc6SqgVEmW7ZWAq0xggVFyyr1ceU2LLMlx6yapd0wG0KKD1Cx5DT/kic8rqbb/HOWWlbbU3qWNM7k6ChHsSP2mfocGqP3msEHu2NMDPjfoCfL0npnZe3V6KFgNy55fzGP8AHuzoqrmm/dsBsROPKvTxnjw02LoWFSm6beFWUrv85adnOH1K1WnTAPicKfQdTNQOxFzUfxMCud3Jm37O9nadrggAvj4o5bb1Ic41wOkLXu1UZVPCcbzwziFk9Grlh+LUpxsZ9F8UQmngflnmt7ao2pKiht+RHIyb1STlO3n3CwqVkqfFpbUqZxv7zX2nDlqVGrHZmbVtygf6XTQ5CAfKW9o6hcHaXls46Vl7ZE1Q6bVBb1FQ9dQ329cZll2euGqW6FtyCVJPMyFxSsdVM0zhhVXBz6GW3DKApowAwC7PjyzvN4euP5pOKSREjkAid3kCYJhxCIAERIRiYkQJnRZ0DhDUQAIYEB6n0ltZNKlJYWjw0vKAjrLGbZpJlVDqLiRHsKdViH21U2pg5xzIP7SxrDeRK6jKZGRrAI9JjKbljWF1lKq0Itc0lYkI2nJ5nO/7yw4ZemoTk7efQyq7S5WsrOukOGUjOxI2z8xD4YoVfAcg8h1E82nql20F1cBQcSNRvlp0zUqMAMnAz0kfu2qEJ5nc+Uxv/VO3q0hSKOe6bwMo/Aw/v+0urW+pO11f9tVOQozjYDPOUlS/pVEqOpHeBta78iOk86N64HM8sausLg94lNyWBwRjnLxvq8p5Hq9REamrgDdQwMp7hhjY4jdvxmk9DSrbp+DOCRI9SqpXUDt5SSf4WoXEW1GnTB51AT7Ca2zPh+cxvDe8qXIqKhemmVIHTpNrboQvLHp5TrjLK835cpZo5iIRFnTs8wIhhkQYAEQYZiESACIsUzpUKBCE6KBIolkmg2JHUR2mYIvbSpylihlDbPLi3fMRobiRLxNh7ya4jF0vhHvFGN7XPVcIWqZ07qukD0icE4wr0xk+PGCPWXd7aU6gw66vnPNr9zZ3LKQdGvPlses554z464ZXfbacR7RLbKWOzHwiZXivaFa6/wARiwHJekr+O3QuigB9PSOWfAaSlSz581JypnPqO8nKqq4uaDgDuRkfj1HffyjVCh3me7paj5KvKaC+tbWmuGNNSBthDrP7SFSvE5JUwB0AwI5OnGfVIEqI2e7KrnScyxuLorTx5CPcRdGQat+so7mtqwq8uXvN49uOd4+V6D2Mp/7fX1dz9BL+QeB2ppW1KmwwwTLDyJ3k+dHkyu7sM6LOxKhIjCLicZQ3EIhkQYAkTopE6QKBHAIiiEJUcIaQYYkU/SaWlrVlQhky3fENLsNmBcDwj3gUX2jlUZAlFbcHSrMeQUsZ5T2qvXrV6immFC0g4I31r5/L9p6pxc4o1D/JiYmsEZW1orDQyd4F8dJTzBHVfX67znk1i8/t7kqcE9djLM1GK89sbSou6Xd1GXyb3ky2vQVw3PJx7Ymbjt0xz0g3zkndiYlk2DkmO3WjxY354PtzlfrO8vHrRz72tK92GyPTAkEOVBYbEbg+RjSH6yRVTwe5Hzlk0ZZWtd2X7WVHqLRr+POwqcmHvN0RPLOHUO5AYANUbIz+Qbb/ADztPTbCp3lOm/UoM+825ZQ7EhERIYIYmIUTEBDAMOIRKAxOizoBiKIgEISIVYQESGJQoMfptGBCR8SVpb21SBxPjNGgo7xssdlQbsZkeKdoWXNOkPEdtQkXhtnUqOlWrklMoEO515J39sxFvS5vuLPWIplQiupOnPjxkc/rKF6jU30udLZ8FQbBvQnofsfaTLhqZd6lMs7aPFVx/DTG+c9cYzgZ5dI/bpTuAKFQBKwOVY75B3BHmDJcSZRleM8KSsGdQKdQDLKfDTf1H5T9v6Zj61FlYgZyOanYiemXdGrabnUoDHLheSgbYPrv9J55fV+/qVKgwM1C5Qbc+o8pluK/Wcn12O0VKZPISVdWwRabFvE4Ld3j4V5Ak+uIKN5mLWsZsdOhp3OPeR69ySw07BeXrFr1CdukisJJVy6aSxvqbZcnDgaip31dAB5/2ml4N2mSmi06inmdLD35TzimcHI2xvmWl1kLSDMGdhrIwRoB5A7c8b/Ob256erW3EaNT4Kgz+UnBkmeW06jADIP9QOqWdtxitTxpqFh5E6hKlxb6dMzbdpujp8xLm04pSqfC+D+U7GGbjYlzsTp0IFhOitOlBxVgwlMiDEKNI4PXALBR1LH0A3Pyk+2sTUcIG7sc2Iw1TH3C/c+0er56hvWpoNVRwq5xzAJ+sr7u/LrinTYjnqP8Nc9Oe5+ksuI0bag65BLOCwb46hUdSTvvKvihCKKtJi9PVocMMOjdAffz9I0nL9M5WuSrlRTphifzM5XJ23wJq6FmXt3q1Xzr8bUFXQhbkM8yfPnj0mL4cddyc7+L956FfqKdIAdQMCakTJXXC5oPjpQOAPaV9NVqUrWo2Rpc2zupw9PfKkH0zNBY2+umFP4lK/WZrg+H/wDk2bbEqzUx/Om4+oyIqLjiwqVadSwr1lFU70btfgfY4Vx0zyyNs/SeYLwerSBepTdQSyKxQ4JB33m5r1DWp02ZypZigqf9m4A3z/K4wffPlIVfj9enSqWtdcZ2yUDgjzHl9/lM6bxtZHtIn+4AHwi2t1T+nu1kanYVmxppOc8sIZueG00v75MBUFO5QA40h6GMgEeYIwP6vSbbjPZkorPT3wpJHWYyjtMtPDKvD6inxUyv9XhxGKtLAOOg5+c2XGrUgEkfvM/SttSVKjDwImpvXfAHzP7zMq27QbWiPC7jIJ8Kdan+M8z7w+JMx0MxBYgsSPcyVRJC4NPXcOcgk4CqcYGPP9jIN8jq5RyNSnBwcgTaL4Lsh8xmdc0wdwMHqQcZkiqmKKH0EZptlZtjaGM9GPzAMkUXqZGCCfmpjaUyWwASc8poOAcOLVgGXfBKf1SaLloFlxGrT/MB5HxLLq140rYDjGfxA5EfuLBKi618L6fGmPvMrSq06lRkUFCHwrZ2f3GNpeLPKVuFYEZByPOdMvbXtSicHl0B5N7To0m2sAkXiFULSqHIGF059TJFSppBMpO+1GoTvqo1UpgjY+E7/Mj9Jm/pZPqdYOUprVJ8bDSn8idce81HCrnFHIxk8/DzExt5dl6VudOhir5X5y94Bc5pb+eMTcjnld1S9qbsm9TJ2CIoA9oVY6lu6fQ2neAfzKykfvKvtC4e4epqACuAF88Sytny1QnrYP8AfAikZns8h74f1c5v+LuS6U/QCZPsxR1VQPOtmatB3t4PIPn5CWGV2uKtPu1pnGACAZhuNUmtr6o6nBFTWp+4noLp3lNweatqEyfbW18VGr+eioJ9RtFRHNFO/qUTgUrlVemeiOd0PyJx8zITqjUqtC4phnRGNKoc6kYdMxxc1LVXHx0H0Z66G3U/I5+s7iv8QpV/7iam/r5N9/1mWo7gPB+44mFVXVWRKyozZOAQefUbT2Bp5ijFL3htQHJezCNt1KgfvPSqb6kVhyKgzOTpL08//wCpFKmlmWVQtQ1Qu3Np509AKKVqR/8AbuR7DKKfZcn/AMpve3d0vfBG3Skr3bqeTYACj5kzzhKrmncV3JNSoQhY88scn7AiOKy9eoNrV1VHqH4tWoGVzuXqZPMvn7yzsrR3DBAScbnoJPtuy1UVWFRlTRT75h8XlgfeXRykWt9Sxb0x/Iv6TuH2OaQqY3Jlhxa2K0wMZ8IUSRw2kRblDzAm3OZdK6ypCnUDEbdfWbbgltT7xKiDpmY92yMeW8seB8TNGour4ScH0iJlVxeIEuNuTMwI8szAWKDXcjqr7fUz0W9ANTO2NWpT5iefK4p3l0p5PT1qPMg4/vLUx+ryzNOugVsaiMMp2z6idKa0uNCs3UIzAeonRs1Wj41dFVKjnj7nlM3/AKi2AmcaWOg9REnTjPXf4n2961RaYc5KKaYP8ucj9Zc8MrhUffl4p06dHDL1kqtU1azAb76ppqYwKh8rZKfzLg/oDOnSlF2YoaddQ8kVm/8AI7CaPs3QP8SqR00g+86dKyurVwGIPLcGV3am1D2i7ZKOcexnTpKuLG8GqAVTTb4KtNqDemfhPyOILH+EyH4qdXPsG2P3AnTpKqS9xipwupjAWqiFvPB/xPSuCVddJh+SvWp/Rzj7Yizpmt4PMe2tQVKvEt/hNtQA88nJlNZcOFyxpsdKtdYYgbYy2MfWdOlniVb33D0o11t0UIqsiYHr+seugDUvHHLVToA+7g//AJMSdLEN8RqZwI1RrYGPPadOgiPWGlvTr7Gc4BG3xDb3izppKvOE3QqU+7qEBl+Fj5eU8/41X03SuCCCXTPpk/3nTpmtY+mrqrpTOcZYfTn+06dOht//2Q==" alt="">
                </div>
                <div class="detail">
                    <p class="user_name">PK Karn</p>
                    <p class="active_status">36m ago</p>
                </div>
            </div>

            <div id="friend_slot" class="mb-3">
                <div class="profile_img">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgXFhYZGRgaHBoeHBwaGhwaHB4eHhwaHhwcHBohIS4lHCErIRoYJzgnKy8xNTY1HCU7QDszPy40NTEBDAwMEA8QGBISGjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDExNDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xABBEAACAQIEBAMGBQIDBwQDAAABAhEAIQMEEjEFQVFhInGBBjKRobHwE0LB0eEUUmKS8QcjM3KCorIVFlPyJHPS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABwRAQEBAQEBAQEBAAAAAAAAAAABEQIhEjFBUf/aAAwDAQACEQMRAD8AtGJAqMk14iGKlJjauzC7DrnaqBNEogqTwYdXqlqkrVeKEoCVS2BJvRwFRkVIImXAqTYIkGKvxMVaoXMpNzFSethelCZgwKji8RQtCkT01KfkGmh8XOAe9t2ufgL0nFC5YGTVmWwO1cczF2sOpIHwA5fChMz7TYKGIcnsB9SRVqxo/ZDLlcXFPIqLct/9a1cVhOBe1mArkEP4oEaRMz01Tz5Vpk9ocJllDqHw+vr8K59S2mUzcWPlWW4ljOXIDtYciRVnEfaS0akQG3Mny6CgcsfxBqDhh1Ug088/6L0dcDzB0FXbxA/mN49fWi8TiGEti6z0F/pWfxMLrVf4IrXxB9U2xuPYYkKGY/Cl78bdjZFA6Ekn42oTEwwL0LzvWpzyPqmbcVeOQNVLxjE/upaQDeTUWFM5g2mbcZc/mqD8Uc/nNLa9K0/MG0S+eY/mPxoV8Q9TXKldopSEnrXVPRXU6FKcUcflqT8Uf+w0SuEs0WcNY2rn46el6cX/ALhHpXp4wOQqePhr0oNsGLinxepPxxx+U0KfaZwdvnUsYg2IvXg4QGvprNshkcvtNiEgBa0WXxGdJ1gT2rPjhJW8U24blYGpzAG5JiIol1ZjuI5dkgnHknZYAmgsd2RQXY6jAVUgEmYnUYgXF/8ASgn4phu4Zm1G8XICyxhdW0BQLiT8TQuPmkd3d31aDpVA0ysGQJkNfm3TsBTbFINzuIUEM+qZJCmQBAtqABY+IC0UkznFcMv7gJgXLMTyiGDCItahs3nQ58IUDaAAF+/LpVX9Gg0u+Io1zpQBi9jBJEeEWiSb8pgxki8tjNiArraDvzAJ6H9K8xMrB5vAmxG0nn8/Wh8zghYhmsZEggdrWivMHDbTAbmNW87/ALD5Vfic7gORoKmdrHnsQfP5Cj8NcePCH0kgarADYaLwF32JE8tjVaZMnwupB5EXBgbdufrHkSfGFhz4WYHSGJNgwnTYE+Kx8x1miwuzGIZhm1C8BrGJNpG30q3CzQw2V8IuvJoaD8eR7GQfKg3JmGEzzF57dj93qtH0X3U+sr1ipN3wr2mDKqYpVXJgMLBtoYj8szEdQafDe9fM8s6iCbqeRuO4vvy/jlsODcTDkqTt7s7kRcRJNoG5JvWpRYa47AyBegGUzemGK6qtzvQyibhSe9bYDoKkRXrkjlVWqoLRh1FhUNVeUpOuDCoEVGakv1Cuqma6pK2xGBqz+rNE4uEkbCrcllFrn66eFzY9e6zGxrQpkE6CrlyS9KpQymDlWd/dtWjyvCjR/wCEoiAKvy2Z8ZWNhVZp0O/DAFvS7jzImWfsoYgCfCCC0+YUj49DTvPY50mBSTiKasBhEhlxFI7kFR9NP/V3qk8W+sjncmFxQSiMr+JVQEwWi1iCZJEXG9BZrhOnWzK4RZiFCDUb6QreJyJH1tMC/AzLJo8Q1Io0yNWwEwB70AzeLDe01LM5oYjS5hNQQEkGGZsNulhpk+QrOwyMzieCTPimPIXEgdJBHz5iqWdWSJhhMHrMkhh98vX3Fy7sofTCliid9N2jqBIk9xXgyDrB0mDzrOnHZbHIWOUwR2INx8D8qNy0iGU9byIjmSD05nlVmW4TikagkhhBkdwbdLgUVksq+GSNJg9R4geq9/rVpkMMtmVAl1IaBpZZiPLkDYSKCYnU1pUjYC/oPvnVgwn8RCxJuwkGReSBAn0obFQxPoY3B6zNMosVZgFDKgkHckSwHYxbsdxFU6ASUNmBME2k/pq+o71amYsyvNrsRvpiWI/xAqCP5NeZhgCAQNQOnV3EMpgctpjexHd0K0uoT/EQDEQZ8JPp8PFV+WZkKlpUgBovPOBG8kA14mqWUrMNMASZHvLIN5AkdxytUMbMsxcmdTBSOcwwJ7i2q3+I1asbzL4jMdLjxLEGLMp2PY2g/HnR7wLUrzGZ04LYyNPhEE8zNlAGw5UUcYuiv/cJHkdjW56xYrxaGYVeaocVtlGamtVsK9FSWMKgamBXaKErrqt/CNdVqS/pjM1dgYsGO9OjlRG1K8bKEPNZlbNsvcTXO9rVLBAC14MKaEETiWGjacRwp5SaDy/HsEY7+NY0iDy50t9qMqi5nALglTIIAJJ9KzqZVBmjOFifhE2lGsPhSzr6Vl+II4aHBgTvtST2i4i2HhsFsSVG0mCYMd4Px9aVcLfDT8R1kIuLhBybaULAFj2BIntU+P4/4eK6upKtqZCLyfAyQfMFfUdaza3yQcRRFw1ZCdbEhrjURLQ3i62Hr2oHjGGy4UEADUIAAAJKKVNt5XVv/aBV2YzIRAV0l3vqVjMEEKpPKBG39puN6AzfEHaTayrtsCsAMv8AbePU96xWjvAwpXLMxLYbq2jYwxY60sLvq8RG913vG+4TlMu6EaVLCJiCRaR8QaSeyPA9wcRcTDcB1XQAul1ViNJJIE207SD3rW4fChhn/cKiDmFUASdzAt0ojb1skn9v7UG/Dkm4FOFwmA8Rn5UO+DqPSlQix8umkgAddvj8qyvEssqsTIAIv8Nxy+xX0HGyyjc+m9ZX2i4auiRCyDYc7bx3NqDjDsoLSD73hncc/wBZHkD0qGNhzAO8SOXugQPMAm/l0qoYn4chrraPRiTB+/1o3MhgEdTNlm1iwAj4gm3atRzD4TkGARqPQfmUgrp9Ijuoq/HIdNYgMjQ69Qw8Lj1WD5jtVXuSQboDIPlHPkVbaqVcBp5XHXcNC97/AFFSaXhbpigYeI50YbEhLAMZNmaJMdO9aDEcNcbViOH4qo5ZrJiMJ7GTMdtMnzA6VtVwYQECOR8wYPzBrpzWOnN2qlhVimpMK1WFQSrEwqkqVciUWlBcGrlwKIwkFFphis2nC78DtXU2/BrqNWCDtQTmTV34tVGN6o1XKL0dgJWazvGAjhYma0fDscOoNNEAcRQDN5YkTbE+go3G43grijCIJcmBbtO9Kvan8Q4+WGEQHl7tsBAmazujMtnVWU/EBJnlt+1Zv8U/rXcFyiPiZpdIAZtLAgEEFF5G0QdjNZ/j3sngYaOyuw0MAEYs2lS0qEJeFBlRMEgmx5U+9jExQ2Z/FKlvxPy7e6v8Uu/2oOy4aQ4ClgYNjKg2UbPIMkbiJvIi6PL5jmsrIY3gGZ5RePob7WNNvZ/2Yxc1h4gwyNUqpZmCpokNAtqJJVSIEbbTSTHzbuEB/IoAm9h5Dz322rW+wGOzviYKBn1YbOdJ0eNdKqAeYIJBmudvjpzNrS+y+Hg5RPwji/iYkw7L7i3A0JN2AkyYHOtRgOCQQbAdawGJmM5gYgR8vgAEaiuhlgybDFBuYg6r77VrOFYv42Vd8NWRkN1a/XZhZuY/giczqumQyzPEEQeMxO1VLnkcDQ6HrevnPHuKu1sQEFenasljcR0t4Q69w8fERWpWb4+5PhgqYYE87yf4rN8Xy86tRP8AABm/p3rBZbi+NhhSWdVNwWEgzzkVpMrxN8YqutWJGkHaSZF/MmKbcU9IOJ8LIw3xG1KikBRpmXJYQTIi6xz32oLDzX+7UMQQe3KXgA9hP+Wtb7RYDrl28JKYqoRA9zFwySyiNmMEkcj1F6wjIdJKgkAgx0BuPSSyz2o5rPUyrs7iyzb7ARYgjSAGg7zA9ZorBCllPuriKIOoMAyACReVO0hoPoRQGI6kARIkgflMTI+t56Udw1kDAMCf7WNobzA57XEbbbjTKQyrOYC6tALGDPOOQ3ufjW64WhVPwy4ZQNaTEhSASAfzLqYxNwImZFZPBxMAMQSyHmXAZRewOkglbi4uIFq2XDcSUgg6tAgltUCFPhIgFDqWDAPhIa61vn9Y6VKL16UNcBerSK6VhVFSRTVgFWIKyRWWQ0zwsOgcuaZYJrHTcS/DrqsrqySPM5Z1Njao4Ss1PMZJFB4SANWpRYSZ7g5Yzzovg5dPC21O3Sh3wr1r61nAfFuDvmGR1xShSYgTvFK19jMTX+J/Utr6wJrV5damWgis6Q3s9wk5YPqxC5dtUkc4A2HlWc/2gYjhl1I34YAcMAshlOlgGJiPEjXjbzFbhtrfWKTcXyhdJUkup1gzM6YlCpsQwJU228hRaZHxvE4Y+j8Qoy4ZdlSb3GoFZgTpC7xyrY/7F8FWzeORbThAAc4LLf1i9JuP4hRnwQoXCbE1oWxJCOV0uoI3QiY1BYmmP+yLEKZ8GRGJhujDnIKsCfVYnvWK6R9a47wlceBF9pEA/GKiuRTLZfQsmZJJMn50+cgGTSXPkuxQG9Enp23x894hwYYrMTuTbp60ozHs4qC6J5siwfWCPlWx4xgvl4Zx4JuVvHn0qWFiK6jmK21jHZfhzmCyqwiAZBt26VdluDIjTpgzMyQB3tWtXLoLaQKuOVSSCrNb/EB8t+VY6pkIuNZUf0uIzuHDqQyHwnWICuoG5Ux4m3HcCvlnFsL8FyitrSBBO41BWIt0J2Pwr697QZEJgOySmqBpDN4r/mBJtE18r4mFAI952AJM2AIBA8wAB8qOaOoVZfM6TY/Hl5W8x60UmKfeCA3WGLR5rpJ8ffnG5pdoGkGZJO0fOaY4CoHKs4m6z4iSYEEALFjO5jeujkIwcVHxSXRUVlfUATpBibbwLRA/Stf7NZUqpZS2gk6QzSVEkgE8z1sNwedY7AUhjpgkgjUTA8W1uduVfQvZ8acJE1LCgbC8m5+ZNPI6/BRwqrNHYxEWoFjXRzeTXqPUC1eA1IwwHpjgPSXCejsLGrNjUpr+JXUD+NXVnCZYptQiJcmjMZbUEMYCZtRFRq7VEre9UJnkAuY86liZhSpIYG3I/cx0pLs1mQg7cz06E9BvelqZsB4Z9Jncxftel2e4wS2kAMVkSJM9iOh6g2tvQfEXMAgxA2YSpH399TVjS53PsF8DqZ2AMnny3+7UPluKACXOnVyv32nvPxrNf1ejQ4VWIjbxDtIBtFuUWqrP57WQzEtK8rwDBja8eneqmD/ad8EoIIIdiDYNAhfWJ1f5fjk/YviP4GeTYrqAB/tAINvOAKLfLtiqYbaW3iIFz6AA/wA1m8DF/wDycNrDxpNrGGXcDrF6LPDL6/Umak6YMXmfKsLxbiz5bGxcRwNAAKeIeMkxpWTuK0Wdz7HCUg6ZSSTaDp2J5bGsZxLKYShcfHckAaQq+MXtyPOKxrpzEcX2vx3V8PHygC4mG2hkcPcg6WYwALwee21T4QjIi6t4pfwjjGEWKbKAY1xJ6CNq0WHoxBIbaNtv9KZfClg4eog8/KmWFhxAYg84ibdd6CUlWCgx1Y7CP1q3NcSw1QqDqYgzpljMXkj6k1mmVnfbDP6/AnuLtHM9R9K+Y54thjXpEN4RI1CBBNu5037VseLZkIpXQS2wJmRbbtNYnjOK7IHNl1aVXl4RqIA7alJ/5q1meMdFkkBel4+U1djZJgwUiHJFpB3AK3mLgjnQ+XSSOc2HnyFHZZFuzAb2BnkBvBtW3MVk8s2khQzDUrMQpsADaYtdr35CtNw/PFH06dKC4AuICk+9zmN9r2rLPjGyyAtmVVuBqvz/ADW9K2uWw1bAvp1qmgEHfwlFYjqATccvlKm2Xz6OB/yz82j6E0ufiHi0i55jpfvYfyKjmsmcFAw2GGqgjmRY+pJb7NKeF4ahi7EHz3nrzHMbxT9VnD4ZgEwCPSpaqFy2GJLSrN/gWw5eXPqa8fMKpILSZi0b9O1bnQvJihq5cUClL5sLYkTzHQd++3x+JOTxNT6WMdv46xHxqvUUlMf6jvXVZ/Sj7P8AFdWdhytFjGBS3HUXPyP3eiszixWez2MSxVNwbkbjsRzHesa1ieOVKOZiJi/68+tJFz5RRyEjnuLg+RG4I/WmeI5VLSfJQAe0QJ2pHnDNlTSFZTEXmfen5MO1US7F0gmWEPsbNPLpII8theKIwSGQo2l0NhAYFTyBIm3QwPSKS5RIcqQzIx92JAtebyCLXt60ZhZcrP4LlTclX0Qdr6hBEfDtSluHlVRGU6Ct4ZXIJmYklrX5nobUpTUmpdQjlcETzvEbdJ/axVZnclgWEAHxBJvKkgAxY+IW5c6uzWTKoC7jUB4ghG3XkTFuV79qkpUaFOqJYSTIv23vWV4kml9SiwMwex/imz4LnUVBYAWJuZMQFHM32HWhsxw/FKkshAIOnmDcAtPS9SfbPZLN4WbySa1DBDpZWHMXggW3+lDe05yoCo6IFtYDTYbARHO1ZX/ZZxQYTvguRDAH5m5+nea+gcbwsHQSyq0iK52ZXTnp87bhuUdjpQYa9QzAgcjY0Xk+GnBcfhZhnU38UGD5xeiv/R8N2lTH0o/K5JcPY8xuR5QKq1pzkn8B1sSf7fCPLl2pbxHNKl+Rus7bTfttbnIqzOcawkQzYgAzb7tWIxc7iZl9GH7g3IEGJPe/LnzrJMeKZvUjWYzcxeFEE7WBNl7C/SfnXHs0XKIAAqKQqrtJMsSTdiep6DpX0rjKnL5aE8JxPAzTLlYuCZ8IPQEze9fJeI4uvEdgAASYA2HYVrmOfVUriEQelwaYosv4wEYwZPhsRqnbaOUUrA5UyyiEMC1+VybC4idu166Rg5Xgp0kIQ5E6SDD8jpZYN46ed5FPOE4x1JMErawuSIF+8Bp7L0rPAYqK0kiAIZSP7gY5EwYNxTn2ZxnbG1kiAPGe9wDb80gfEU4GzzuGjBVPu3/8VIv5Vm+I5USuggoYGkLJMdGNh3MW+QdHNK2GhncQ3LyPrHy5UE2ETJ6REdPzGfLntt6BIcnhm4/E0LJlTaZmNM+u96K0KFcojFo94vLc5IJFjf8Aajs9kUKqlgfzHmfzQT07+Ud6MN0QjUTJ28Ja1r2BjawHTyqRdl8EiOrNJmItf1j5xT7Ju5sUIM3OzHqT1J3+tAYmWEgqY3m5EmLW02vNrb0Zk2CmzGd+vWYIPbc1VHGlv7Gr2g//AFIdW/zD966sk9zOJMkj0pIzszkDTEmxvboDvTPEeDeIPKB+9Lc9huPcZQeSwL94t8YqTzEfQujWY5z+8WpPmcN2B0kmZsQAAexbntRmZL6SXGh+u4277C3W1JVxMMSXLgFjp0gwecap8PvdD6UwUwVEQeJhJF9Rv3i+1VPlA5BDCB4p/KfPt8/07JzLe7pAkAvrM7DeO1+9SzOaVfDBIiJUraeQPPeI+PStAwbKqNJWQrCG5gXJMnl/FC5rKahDDxXAmIMciOxA26V5l+JOSiLElmu1p8MEcr235+ZNDZ3FZ23jQNgB70kEC/5ZH/bEmhIO7oNEamJYMdIIHKB1MzPKrsRNbYnj0sU0hgAY0ljbyliINqnkMDFfYzpF9R1bwZn8wP3eh8vlGw0xS7g/hlhEbi5ue5Yi9U6mm80rx1bCcOnhVRpEMR4QIEkbk7k85PUU0zHtiTh6SSeYPUTI/Q1nc1mnd3EX0kR390esXPOgcTD0DQ0AAAyORvPmPvnT1zKpbGg/9zcxOkAA8uRn47/GoN7Svvq8ifIEdpnVbntWZdGEw2+8Gx53+zXiFiY0K09fCbdwRfes/J+jvDx8TMuAX3O1/h22+darLJh5UDWwDFY67dtwD1rAYOO6+4rL3ViY9f5q/CxGZizkLYnU/jYtyhTYnnMW9RR8n6aX2j9qjj4ZRE04cqNbRqMflQdT16dKx34YVTqHiOw5ibz3JHypmczhohmXc31NNo2Cjlvvyn1pZhS2IurmQT2E7/I1qSRi21DK4czOy3mi8gpM8iZv59v9K8z4CIEXc3by5D76UuXGI+z9Jq/F+tKrsBD6uYDLdYvuLddt7URwtnTU4GoSqtp58y0diF+NKeHYxe2sBiDafe7ERc96ccKzT4RGtYWbiSVYbTE9reQ6VpGmLhaWKSQhutxNxIN9okWPfyqxM434TQ4AAhtpNzGkRz3iKDTEDhb+HDnbUvhaSI6ESetU5nIsHU4ZBDS2mea7gDYxEelCHvxBncHQWa0CTAmL77T9OUUXg42oDxaSbGeU2EyIA1T8OVL+DJpVg5ACnUkypJvYdJ8QPwO9W5jPqhaV8U3HIgkFyoPTmJNpNuVEGOMiiXAfVP8Aw5VoNxYgi9rGBRGTIDkXEmdM3boJmOZPLehEzCumoAETcSdQHI6o6mNudV5RtBIViWF08IBDSJQi+6kmbyRaZoqjU6u3/d/NdSn8dv8A5F/y/wA11GNa1ubcDqvIRv8A5TY+X2As+ZAgnUeoYz1sLLtzv3p6cEaySJPfpSnP4ILSV1me6qI+vzoTMZtzJVmXSx8RIkwt2I8resUqwRJ1N4vdhBy7MTMb8hPMxaWfFcs7PYBFbxKFEyx2U9bkdRJFA4PDnCErJ0yQRAlpEnvzM7X+OozV+Hm0R9EAtYWgiCfFcXHUz/bPKjsmyOCq7FrsSADpXYxJC+LzvekgyCu7NslpPo0rM3EFSNpApw4U4aaFcINRLOVDEDfabEtAi/h5zSiTM/iMzlFvYqByCk32AAuw8yecxNMq6p4nh8QTM2AAky1vykm3IbwKZZA6/wAUNJVgu+wA1kgCTckCd+YvsCMTAXW58JlV0bwqAAKd4/uOo7ah5UVQR7P4iJBBuyy0noYJk7SRQmYzRjEZJJdWZRewW24EhoBuO/Sg0wdWKyqSYYKGtPj8JVV6QZ5Wprh8MKAF9aupkkSUMxF9zEfPaaw6Mbn8kiojodIYjlcGDKlpmfOJAnyAxGLwpPPxHnEb1ZxtG/HcGJBII6X59/4qrDLREah8xW5651LFywZyEMWkXmT0javMbhmKqM7KIUSTMHcfHevcOxLJBb/ENh0F4mpY+bcqQyyI6WP3FOIImC8iRpnmfv7mrHxMRNQncEmwPSdxbcVenEQQFYR0PQjafp5GoYuJruI2Mx6/xViVLhSVm5Yne82P6xVuWYKGcj/Co5z0+M12G5AA03GxqsG28kc+QneO9WJRjsSSTv8AfyFDoL0c+HAoNdzRVFmAIYGSIO45VrMt/vVNgWGx2mxN+QsDWZwMMsdIEmt57OcMGEgZ2nUZI6cvrvyqgobhWAwHjI1z7t9vyiD97U0yWGgVNN4ZmS1lA96T0k+fjoTMYQDs7AAAkNHQwD2NiQLWpfkOJFMVUMufErA8wbGCesmOdx6pEZZW1Fbg6mZdwA0lokQb7XkXAtfVfxREdgjoA4VTqVgQRtGmBBsb2F6uyCa9SbBTKyNLAi6nvIEHeNPIzUMtgriS7n/htESRqkFgsnYnSbiedr0oBlshMIQASSTPhB/5fKbj68pNwsksfFYQdN53KkHmJVRO/ivXLnHZHfwyrRtcCbrBtIAO/brFN+G5ot4dWklQdQA3MeIjoT8Jv3KoX/0mY/8AkX/t/aup3/TL0b/srqx600ubxoIABk/QV46iwMyd/wBawuf9rXXEcoss76UHMAWnubADlJNOuGpiuwdz4dMC3bxEKLWgGfStWCLcymggqYABkFeUmAt7GYrOY+blkVVUhjpItcKAttwJ3+VafPkBgHmYOo7gWNt9wCRaxJ7xWTcq+OEQhFVXsBEQzD4j94qiqzLf74vgnwlY0kGbCQdXWZaP+UciKIymW1FsKYTDNwCL6J8NtvF5yQTQ3CcUF3xAgtMrMgvsreunVyi4FrUdhALqZjCjUSBIBImxJEm89d5MxToCNnwgxHIGrToAWdImA533Agdz60Bl89r1NrLWUARBJtYEG7BS8G0SKoZHxsRkDNGsAC4W2xI5jnfqTvR2T4dpxCAAUQ6lJB3iCW68wPjyNFMHtgqgRUJVrajqhgYmSY3uYO2582mPiplsFnLAhVJ0yb9AJnew53NA6lL6BDFm8QaZY2EG0BRvCxyHekntjjE4KaI0a4JFptqEjlNrdqx+1r8jK4up2L/3Ek+ZJP6ipphODaqsuSfdphh5lx09QK3GFf4DNdgp85B+Ir38AjYuPgR+9G4ebJ3VT6CrYB/KBXSQWljI8xM+afzUHR+TD0WKZNhqGHLf7+VTGMotq+VWLSRss/ME+VTTBckBU8hG5plmsRxsR2Iq/wBnHLZhdbeXUnsOfz3rF8IHM8EzIAL4bAH1+PSiuHcAdDrxk8IAMCHJJI5LMCJ3itnhcSRmKWblA3Xe5P3v2qjEfQrBY1wNTQRPK/wn09KogS8GyykOoNwG3sbHl3mrmxl0eEwibkmd7b8zcW5/GhcbOBiqjcAjUDyOzbdZ58/hTmQPEgMqdJvPhkgSZ7En/pB5VWqGJZX1SQLSRtsCL3/wxO0ilLcM14bvMurajHPcASLyNN9uVSyXtDg6sQMjBtgGMxA0QCJsbSIsZNU+z+eJZ0G2JqCge9ZVMd5H0IohF8BxPfR5MkhCx5i4hvMAdLkjpTXAUjUsatQ0tqUA7WO5gjncbmgsTKp4EaZYsZtedMDV01ah5AE09yaESWHhxPeN9/yg9BdhIjlPSkMvgKGTFQwoQOQRMsxUggk/8qgDp6014FmQ2GJUltMAkCSLggvuZEHzAqzO8GlXcLqBEi3OwIK31Ai96YcFdHUBl9BMAiPgbDmdqKos/rG/sP8Am/iupx+An9vz/mvKixXsjkwzs7gQICEkEn/pBkTPPe/St2+vTCBZjny9Bv8AGvm3sQ7QzsqnU0KSYvubTdjqFt+dhevoOVx2AhgFiABue8gWA2i5qqUYmUUIfxGJO5O1xEdegMVlc9hpiY6qoudR1ixIMk7G/hnzk7b1o+KZ06bfv0i3786zWRx3XGYGJ0lma3eFBWBMXubT03pVYZcOyoww7MADcxcyTAAII8RMi07ml/EUGk6iVAbXvImQIPXxGw6UxxOIokOwD4k6URXDeMhj4otMT5XsN6lmsuHQazAUl3J90qARPbxWAF4q1FWERhscRTChOhgDQOZ81juDSrg/EkGNiHG8Mk+6dgYFid2CkqDHMnlSzi3tC+IHRAqoZUiLlQ7MovYCNM9we1IXJk97nzP+tSbLAzuHiMuifA8kAQAG93QdzpK7nctR2Yy6vkcZ3a7BmhbwRp0+kwPKsXw3MsjKAYGrURa9rSelv9a2ebzCDL4uXUwSrMpBksqkNqHXwiSPrRi1gMJypkU2wsdWAJF6VIs0wwFERyP3PnWozRf9QK8/qAdzFCYqafI7H9Ox7VUrVasGu17Ga900LDWkVxVqdIp3Mb0MXcN4SdUG4sQNiZ5b71ZhYBaCx0pO8ST2QfmPfYdeVRzD20rZd43JPVjzPyHKKP1Kctn3w2Gg7QbybwRq7WJrcZZxoZx4g+ibyLGwJ5bR5mvn+MtN+EcaGGj4bKSrAdogcunnv8Kp4jzOvZXMxuAGHW3hJlTefsUq4ln0fCaPCzHT0JAAJMcrk2/iVDcTYj/FtMCI6EbH7iqBiBomZnr13o1I4hJYsTJO56nmT3NWYOadCGRirTMjqNj8zXoQ3I5H78qrYfuKsTaezXFRmC2E5AcAFGIC6iJLC20kzH+laLiPFvwiSU1IRDrEmD1G89a+X5HE0OjjYET5GxntBNaPj+exMEhDcLADc4F11TIbwkD4zO1Sat+IB5VHWQGgQZHMAgi4ibjvQPBMdyA5JgnxDVIDGOW0EaSL86QZbjCK6wFGwBvIOm3LrHXa9avIZCIKWEGOhBJIU+V4NFMNv6w9fr//ADXVXob+4fA11ZaY/g2eOHiohZdCLBMgLq3Yz+UTb4CvoaZlcRSyHUB+YAhfQ8/MV8TzeIzOqKZ8QjkC0+8fU79BWt4PxjEbThIYw0YCx0htIliSZaIMnuRet1mNTmcNzIAC9CeVt43NZ7PsMAM7bMIgmDFzcm5Ja/p0p1xb2kw1sGvYW8pIvsIn0U1gfa7ii4zjQTpW1zPK5jlct9xWYaaf+sIiIwUaiSCB47QOUx0Bv25tNfHM+75YOQVVyECzMyNbMbCT7qm1oPWsplDLLuQGEDvI+VhPlTz2h4ouIqYae4viJiLmfqCp9e1ajJAFjfzNTC/Oo71dgsQbWPXn6dKUrZDfkQY70Xho+J+aAAFG9gABHyFDfln1/an3DcDwC3KmTRpLo0mGEH7uKvw6bY+S1CCL8jQi4WjwsIb5EdR1/StYEExLQdjy5HzqOPlgPFeO3KrMTBvMUTl8TSskwD2seREc/oOfSqxFqpJ0iSYPnyorDwFXe56flHSev0865cQAnSulCbi8nsTvHbauKib9bx9PvtVIkcV9W5v+kfIfcUI4NHvgybftttVLLrMJ6t+3XzoqAlSbC/0oZ8Eqd6epghRAFLc+sGazY0DKX8716gv6VM7eVR2YHvQlyMZkWkfwaqYfKrov6/X+a8K3+/vpSlI+lxTDjHETjBNQ8QAn+Pvn2oALeuxxtRUpmt3wj2nVMNFgyu5B3EAiB/mkdQawvQ1YiTI+FWHX1T/3bg9V+I/eur5LoP8AbXUYdMsmY14p/KNK25tv5ws/EUYEfwoSQiDXiEWlj4mUnc/lWO1D/gSMLC2HvudokBiT5JpHn51fxrNkrGxc6yI91ASEWefX4UgrfFZ3ZixkmSapY8/QVMLCxzb7+lciywHIUhPBEHa8EeU2+kipHDMFuQt+tTwSILHbf0Fe41lRT5t5kz+oqSlFqSjwnv8ArXGwq04ZAE8zPoNp+NSQceJQKf5bFCgUgwvfJpgHtTKKe4WaU712YKOItPLrPbvSNDzkKBuf0A/Mew9YrsTNAiFBHUn3z2PQdh6zWpRi/EzGm0hjsI2A79fIW78qFLFjJJJ+naOQqpVtP39/t2qxBypScVckCJ/+0zYfH51Q+YCW95unTzNV4ZJOpjJ6ch2AoqXM4xCdXgUH3dj5N+1FI6jaBQeIyv7xg2hunZuo+nLoaFxCLHlWdxowfG7UDn0BWvTmKg7SKLUECiKqf9B9/SpjmKr/AGoS8vIHcf6fSpYm4I5/Z/ShlNo6VLVb79aUm9c5laqdqmD4TWaniLMj1FRU2np9K8R7g1Y40t2P2a0ln4w611VfhL1r2pHg/wCNj/8A6j/5YdK+Mf8AEb/o/wDBK6uo/hDv73oa7Lbt5fvXV1X9CY9z4fUVdmveH3zNdXUp5icvX6Grsz7w8v2rq6pBcLc+dELXV1STzmyf8i/VqgnOurq1GVq/fwq3A2Pr+tdXVpBMtuf+qizz8z+ldXVkgm3++9eHl5H9K6uoqj0VMbV1dWSD5n0qtP3/AFrq6pPV3bz/AHqS7fGurqkrNWD3TXtdQVS1fmd0++ldXU/wIV1dXVJ//9k=" alt="">
                </div>
                <div class="detail">
                    <p class="user_name">Jon Snow</p>
                    <p class="active_status">14m ago</p>
                </div>
            </div>

            

            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
        #friends_comp {
        position: relative;
        min-width: 400px;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 3px 3px 12px 2px rgba(119, 119, 119, 0.596);
        h3 {
            font-family: 'Poppins', sans-serif;
            display: block;
            border-bottom: 2px solid rgb(204, 204, 204);
            padding-bottom: 10px;
            margin-bottom: 30px;
            font-weight: 700;
            font-size: 20px;
            span {
                font-weight: 700;
                color: #777;
            }
        }
        #friend_slot{
        background: #f6f6ff;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        width: 100%;
        position: relative;
        opacity: 0.8;
        transition: all 0.4s;
        &:hover {
            cursor: pointer;
            opacity: 1;
            transform: scale(1.03);
        }
        .profile_img {
            border-radius: 100%;
            min-width: 70px;
            min-height: 70px;
            // height: 100%;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .detail {
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-content: center;
            justify-content: center;
            // justify-items: flex-start;
            // flex-direction: column;
            padding-left: 20px;
            .user_name {
                font-family: 'Poppins', sans-serif;
                font-weight: bold;
                margin-bottom: 0;
                font-size: 17px;
            }
            .active_status {
                color: rgb(145, 145, 145);
                margin-bottom: 0;
                font-size: 14px;
            }
        }
    }
    }
</style>