
def assign_unit_position(section, team, role):
    if role == "BN FSO":
        return 1
    elif role == "BN FSNCO":
        return 2
    elif role == "BN FO":
        return 3
    elif role == "AFATDS":
        return 4
    elif role == "BN RTO":
        return 5
    elif section == "ALPHA" and role == "CO FSO":
        return 10
    elif section == "ALPHA" and role == "CO FSNCO":
        return 11
    elif section == "ALPHA" and role == "FO" and team == "1":
        return 12
    elif section == "ALPHA" and role == "RTO" and team == "1":
        return 13
    elif section == "ALPHA" and role == "FO" and team == "2":
        return 14
    elif section == "ALPHA" and role == "RTO" and team == "2":
        return 15
    elif section == "ALPHA" and role == "FO" and team == "3":
        return 16
    elif section == "ALPHA" and role == "RTO" and team == "3":
        return 17
    elif section == "BRAVO" and role == "CO FSO":
        return 20
    elif section == "BRAVO" and role == "CO FSNCO":
        return 21
    elif section == "BRAVO" and role == "FO" and team == "1":
        return 22
    elif section == "BRAVO" and role == "RTO" and team == "1":
        return 23
    elif section == "BRAVO" and role == "FO" and team == "2":
        return 24
    elif section == "BRAVO" and role == "RTO" and team == "2":
        return 25
    elif section == "BRAVO" and role == "FO" and team == "3":
        return 26
    elif section == "BRAVO" and role == "RTO" and team == "3":
        return 27
    elif section == "CHARLIE" and role == "CO FSO":
        return 30
    elif section == "CHARLIE" and role == "CO FSNCO":
        return 31
    elif section == "CHARLIE" and role == "FO" and team == "1":
        return 32
    elif section == "CHARLIE" and role == "RTO" and team == "1":
        return 33
    elif section == "CHARLIE" and role == "FO" and team == "2":
        return 34
    elif section == "CHARLIE" and role == "RTO" and team == "2":
        return 35
    elif section == "CHARLIE" and role == "FO" and team == "3":
        return 36
    elif section == "CHARLIE" and role == "RTO" and team == "3":
        return 37
    elif section == "DELTA" and role == "CO FSO":
        return 40
    elif section == "DELTA" and role == "CO FSNCO":
        return 41
    elif section == "DELTA" and role == "FO" and team == "1":
        return 42
    elif section == "DELTA" and role == "RTO" and team == "1":
        return 43
    elif section == "DELTA" and role == "FO" and team == "2":
        return 44
    elif section == "DELTA" and role == "RTO" and team == "2":
        return 45
    elif section == "DELTA" and role == "FO" and team == "3":
        return 46
    elif section == "DELTA" and role == "RTO" and team == "3":
        return 47
    else:
        return 50